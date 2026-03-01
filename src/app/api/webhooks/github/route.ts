import { exec } from "node:child_process";
import { NextResponse } from "next/server";
import { join } from "node:path";
import { existsSync } from "node:fs";

export const runtime = "nodejs";

/**
 * Trigger the deployment script using exec with explicit cwd
 */
function triggerDeployment(projectPath: string): void {
  console.log("[github-webhook] Triggering deployment script...");
  console.log(`[github-webhook] Project path: ${projectPath}`);
  console.log(`[github-webhook] Current working directory: ${process.cwd()}`);
  
  const deployScript = join(projectPath, "scripts", "deploy.js");
  
  // Check if deploy script exists
  if (!existsSync(deployScript)) {
    console.error(`[github-webhook] Deploy script not found: ${deployScript}`);
    return;
  }
  
  console.log(`[github-webhook] Deploy script: ${deployScript}`);
  
  // Use exec with explicit cwd - same as manual run
  const child = exec(
    "node scripts/deploy.js",
    {
      cwd: projectPath,  // Explicitly set working directory - CRITICAL
      env: {
        ...process.env,
        GITHUB_WEBHOOK_PROJECT_PATH: projectPath,
      },
    },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`[github-webhook] Deploy error: ${error.message}`);
        return;
      }
      if (stdout) {
        console.log(`[github-webhook] Deploy stdout:\n${stdout}`);
      }
      if (stderr) {
        console.error(`[github-webhook] Deploy stderr:\n${stderr}`);
      }
    }
  );
  
  // Disconnect from parent so it continues after response
  if (child) {
    child.on("error", (err) => {
      console.error(`[github-webhook] Spawn error: ${err.message}`);
    });
    
    console.log(`[github-webhook] Deploy process started with PID: ${child.pid}`);
  }
}

/**
 * POST handler - Triggers deployment on any request
 */
export async function POST() {
  console.log("[github-webhook] Received webhook request");
  console.log(`[github-webhook] Environment GITHUB_WEBHOOK_PROJECT_PATH: ${process.env.GITHUB_WEBHOOK_PROJECT_PATH}`);
  
  const projectPath = process.env.GITHUB_WEBHOOK_PROJECT_PATH ?? process.cwd();
  
  // Trigger the deployment script
  triggerDeployment(projectPath);
  
  // Return immediately - deployment runs in background
  return NextResponse.json({
    ok: true,
    message: "Deployment triggered successfully",
    projectPath,
    note: "Deployment script running in background",
  });
}

/**
 * GET handler - Health check
 */
export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "GitHub webhook endpoint is active",
    timestamp: new Date().toISOString(),
    projectPath: process.env.GITHUB_WEBHOOK_PROJECT_PATH ?? process.cwd(),
  });
}
