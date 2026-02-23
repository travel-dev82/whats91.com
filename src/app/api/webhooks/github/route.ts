import { createHmac, timingSafeEqual } from "crypto";
import { exec } from "child_process";
import { promisify } from "util";
import { NextResponse } from "next/server";

const execAsync = promisify(exec);

export const runtime = "nodejs";

type GitHubPushPayload = {
  ref?: string;
};

function parseBooleanFlag(value: string | undefined, defaultValue: boolean): boolean {
  if (!value) return defaultValue;
  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

function verifySignature(rawBody: Buffer, signatureHeader: string | null, secret: string): boolean {
  if (!signatureHeader || !signatureHeader.startsWith("sha256=")) {
    return false;
  }

  const digest = `sha256=${createHmac("sha256", secret).update(rawBody).digest("hex")}`;
  const received = Buffer.from(signatureHeader);
  const expected = Buffer.from(digest);

  if (received.length !== expected.length) {
    return false;
  }

  return timingSafeEqual(received, expected);
}

function getBranchFromRef(ref?: string): string | null {
  if (!ref || !ref.startsWith("refs/heads/")) {
    return null;
  }

  return ref.replace("refs/heads/", "");
}

async function runCommand(command: string, cwd: string): Promise<void> {
  const { stdout, stderr } = await execAsync(command, { cwd });

  if (stdout) {
    console.log(`[github-webhook] ${command} stdout:\n${stdout}`);
  }

  if (stderr) {
    console.warn(`[github-webhook] ${command} stderr:\n${stderr}`);
  }
}

export async function POST(request: Request) {
  const secret = process.env.GITHUB_WEBHOOK_SECRET;

  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "GITHUB_WEBHOOK_SECRET is not configured" },
      { status: 500 },
    );
  }

  const rawBody = Buffer.from(await request.arrayBuffer());
  const signatureHeader = request.headers.get("x-hub-signature-256");

  if (!verifySignature(rawBody, signatureHeader, secret)) {
    return NextResponse.json({ ok: false, error: "Invalid signature" }, { status: 401 });
  }

  const event = request.headers.get("x-github-event");

  if (event === "ping") {
    return NextResponse.json({ ok: true, message: "pong" });
  }

  if (event !== "push") {
    return NextResponse.json({ ok: true, skipped: true, reason: `Ignored event: ${event ?? "unknown"}` });
  }

  let pushedBranch: string | null = null;

  try {
    const payload = JSON.parse(rawBody.toString("utf8")) as GitHubPushPayload;
    pushedBranch = getBranchFromRef(payload.ref);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }
  const targetBranch = process.env.GITHUB_WEBHOOK_BRANCH;

  if (targetBranch && pushedBranch !== targetBranch) {
    return NextResponse.json({
      ok: true,
      skipped: true,
      reason: `Ignored push for branch ${pushedBranch ?? "unknown"}`,
    });
  }

  const projectPath = process.env.GITHUB_WEBHOOK_PROJECT_PATH ?? process.cwd();
  const processName = process.env.PM2_PROCESS_NAME ?? "all";
  const shouldInstall = parseBooleanFlag(process.env.GITHUB_WEBHOOK_RUN_BUN_INSTALL, true);
  const shouldBuild = parseBooleanFlag(process.env.GITHUB_WEBHOOK_RUN_BUN_BUILD, true);

  const commands = ["git pull"];

  if (shouldInstall) {
    commands.push("bun install");
  }

  if (shouldBuild) {
    commands.push("bun run build");
  }

  commands.push(processName === "all" ? "pm2 restart all" : `pm2 restart ${processName}`);

  try {
    for (const command of commands) {
      await runCommand(command, projectPath);
    }

    return NextResponse.json({
      ok: true,
      message: "Deployment commands completed",
      branch: pushedBranch,
      commands,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown command failure";
    console.error("[github-webhook] command failure", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Deployment command failed",
        details: message,
      },
      { status: 500 },
    );
  }
}
