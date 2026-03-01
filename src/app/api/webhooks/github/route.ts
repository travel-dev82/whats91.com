import { exec } from "node:child_process";
import { NextResponse } from "next/server";
import { join } from "node:path";
import { existsSync } from "node:fs";

export const runtime = "nodejs";

/**
 * Trigger the deployment script asynchronously using nohup
 */
function triggerDeployment(projectPath: string): void {
  console.log("[github-webhook] Triggering deployment script...");
  
  const deployScript = join(projectPath, "scripts", "deploy.js");
  
  // Check if deploy script exists
  if (!existsSync(deployScript)) {
    console.error(`[github-webhook] Deploy script not found: ${deployScript}`);
    return;
  }
  
  // Use nohup to run deployment in background, detached from this process
  const logFile = join(projectPath, "deploy.log");
  const command = `nohup node "${deployScript}" > "${logFile}" 2>&1 &`;
  
  console.log(`[github-webhook] Running: ${command}`);
  
  exec(command, {
    cwd: projectPath,
    env: { ...process.env },
  }, (error) => {
    if (error) {
      console.error("[github-webhook] Failed to start deployment:", error);
    } else {
      console.log("[github-webhook] Deployment script started successfully");
    }
  });
}

/**
 * POST handler - Triggers deployment on any request
 * No validation, no checks - just triggers the deploy script
 */
export async function POST() {
  console.log("[github-webhook] Received webhook request");
  
  const projectPath = process.env.GITHUB_WEBHOOK_PROJECT_PATH ?? process.cwd();
  console.log(`[github-webhook] Project path: ${projectPath}`);
  
  // Trigger the standalone deployment script
  triggerDeployment(projectPath);
  
  // Return immediately - deployment runs in background
  return NextResponse.json({
    ok: true,
    message: "Deployment triggered successfully",
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
  });
}
