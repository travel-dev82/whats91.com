import { spawn } from "node:child_process";
import { NextResponse } from "next/server";
import { join } from "node:path";
import { existsSync, openSync, writeFileSync, closeSync } from "node:fs";

export const runtime = "nodejs";

/**
 * Trigger the deployment script using a completely detached process
 * This ensures no environment pollution from the parent Next.js process
 */
function triggerDeployment(projectPath: string): void {
  console.log("[github-webhook] Triggering deployment script...");
  console.log(`[github-webhook] Project path: ${projectPath}`);
  console.log(`[github-webhook] Current working directory: ${process.cwd()}`);
  
  // Use ABSOLUTE path to the deploy script
  const deployScript = join(projectPath, "scripts", "deploy.js");
  
  // Check if deploy script exists
  if (!existsSync(deployScript)) {
    console.error(`[github-webhook] Deploy script not found: ${deployScript}`);
    return;
  }
  
  console.log(`[github-webhook] Deploy script: ${deployScript}`);
  
  // Create a wrapper script that will run in a clean environment
  const wrapperScript = join(projectPath, "scripts", "deploy-trigger.sh");
  const logFile = join(projectPath, "deploy.log");
  
  // Write a wrapper script that sets up a clean environment
  const wrapperContent = `#!/bin/bash
# Deployment trigger wrapper
# This runs in a clean shell environment

cd "${projectPath}"
export GITHUB_WEBHOOK_PROJECT_PATH="${projectPath}"
export HOME="${process.env.HOME}"
export USER="${process.env.USER}"
export PATH="${process.env.PATH}"

# Run the deploy script
node "${deployScript}" >> "${logFile}" 2>&1
`;
  
  try {
    writeFileSync(wrapperScript, wrapperContent, { mode: 0o755 });
    console.log(`[github-webhook] Created wrapper script: ${wrapperScript}`);
  } catch (err) {
    console.error(`[github-webhook] Failed to create wrapper script:`, err);
    return;
  }
  
  // Use spawn with completely detached process
  // This runs in a completely separate process group
  const child = spawn("/bin/bash", [wrapperScript], {
    detached: true,        // Completely detach from parent
    stdio: "ignore",       // Ignore all stdio
    cwd: projectPath,
    env: {
      // Clean minimal environment
      HOME: process.env.HOME,
      USER: process.env.USER,
      PATH: process.env.PATH,
      GITHUB_WEBHOOK_PROJECT_PATH: projectPath,
    },
  });
  
  // Completely unref so parent can exit without waiting
  child.unref();
  
  child.on("error", (err) => {
    console.error(`[github-webhook] Spawn error: ${err.message}`);
  });
  
  console.log(`[github-webhook] Deploy process spawned with PID: ${child.pid}`);
  console.log(`[github-webhook] Logs will be written to: ${logFile}`);
}

/**
 * POST handler - Triggers deployment on any request
 */
export async function POST() {
  console.log("[github-webhook] Received webhook request");
  
  const projectPath = process.env.GITHUB_WEBHOOK_PROJECT_PATH ?? "/home/whats91/htdocs/whats91.com";
  
  // Trigger the deployment script
  triggerDeployment(projectPath);
  
  // Return immediately - deployment runs in background
  return NextResponse.json({
    ok: true,
    message: "Deployment triggered successfully",
    projectPath,
    note: "Deployment script running in background. Check deploy.log for progress.",
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
    projectPath: process.env.GITHUB_WEBHOOK_PROJECT_PATH ?? "/home/whats91/htdocs/whats91.com",
  });
}
