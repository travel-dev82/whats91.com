#!/usr/bin/env node

/**
 * Deploy script for whats91.com
 * Strict sequential flow, does NOT touch node_modules, and ensures dependency files are updated.
 *
 * Steps:
 * 1) Pull latest code into temp folder
 * 2) Wait 5 seconds
 * 3) Copy src + package.json + package-lock.json (+ configs if present) from temp -> project
 * 4) Wait 5 seconds
 * 5) npm install (block until complete)
 * 6) Verify required deps resolvable
 * 7) Wait 5 seconds
 * 8) npm run build (block until complete)
 * 9) pm2 restart all
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// ====== CONFIG ======
const CONFIG = {
  projectPath: process.env.GITHUB_WEBHOOK_PROJECT_PATH || "/home/whats91/htdocs/whats91.com",
  tempPath: process.env.DEPLOY_TEMP_PATH || "/home/whats91/htdocs/whats91.com/temp",
  repoUrl: process.env.DEPLOY_REPO_URL || "https://github.com/travel-dev82/whats91.com.git",
  branch: process.env.GITHUB_WEBHOOK_BRANCH || "main",
  delayMs: 5000,
  pm2RestartCmd: "pm2 restart all",

  // Copy these folders/files from temp into production
  copyFolders: ["src"],
  copyFiles: [
    "package.json",
    "package-lock.json",
    // optional configs (copied only if they exist in temp)
    "postcss.config.js",
    "postcss.config.cjs",
    "postcss.config.mjs",
    "tailwind.config.js",
    "tailwind.config.cjs",
    "tailwind.config.mjs",
    "tailwind.config.ts",
    "next.config.js",
    "next.config.mjs",
    "next.config.ts",
  ],

  requiredModules: ["@tailwindcss/postcss"],
};

// ====== Pretty logs ======
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
};

function log(message, color = "reset") {
  const ts = new Date().toISOString();
  console.log(`${colors[color]}[${ts}] [deploy] ${message}${colors.reset}`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    log(`Created directory: ${dir}`, "yellow");
  }
}

function run(command, cwd, opts = {}) {
  log(`Running: ${command}`, "cyan");

  // default env: keep existing env, but DO NOT force NODE_ENV here
  const env = { ...process.env, ...(opts.env || {}) };

  execSync(command, {
    cwd,
    stdio: "inherit",
    env,
    timeout: opts.timeout ?? 0,
  });
}

/**
 * Safety: refuse to delete/copy anything involving node_modules
 */
function assertNoNodeModulesPaths(p) {
  const normalized = String(p || "").replace(/\\/g, "/");
  if (normalized.includes("/node_modules") || normalized.includes("node_modules/") || normalized.endsWith("node_modules")) {
    throw new Error(`Safety stop: node_modules path detected: ${p}`);
  }
}

function copyFolderClean(src, dest) {
  assertNoNodeModulesPaths(src);
  assertNoNodeModulesPaths(dest);

  if (!fs.existsSync(src)) {
    throw new Error(`Source folder not found: ${src}`);
  }

  // only delete the destination folder (e.g., src)
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }

  fs.cpSync(src, dest, { recursive: true });
  log(`Copied folder: ${src} -> ${dest}`, "green");
}

function copyFileIfExists(src, dest) {
  assertNoNodeModulesPaths(src);
  assertNoNodeModulesPaths(dest);

  if (!fs.existsSync(src)) return false;
  fs.copyFileSync(src, dest);
  log(`Copied file: ${path.basename(src)}`, "green");
  return true;
}

function verifyNodeModulesAndDeps() {
  const nm = path.join(CONFIG.projectPath, "node_modules");
  if (!fs.existsSync(nm)) {
    throw new Error(`node_modules is missing at ${nm}. npm install did not create it.`);
  }

  for (const mod of CONFIG.requiredModules) {
    try {
      require.resolve(mod, { paths: [CONFIG.projectPath] });
      log(`Dependency OK: ${mod}`, "green");
    } catch {
      throw new Error(
        `Dependency missing: ${mod}. ` +
          `This usually means package.json/package-lock.json on the server do not include it.`
      );
    }
  }
}

async function deploy() {
  const start = Date.now();
  log("============================================================", "bright");
  log("Starting deployment (strict sequential)", "bright");
  log("============================================================", "bright");

  try {
    // STEP 1: Pull to temp
    log("[STEP 1] Pull latest code into temp folder", "yellow");
    ensureDir(CONFIG.tempPath);

    const tempGitDir = path.join(CONFIG.tempPath, ".git");
    if (!fs.existsSync(tempGitDir)) {
      log("Temp folder is not a git repo. Initializing...", "cyan");
      run("git init", CONFIG.tempPath);
      run(`git remote add origin ${CONFIG.repoUrl}`, CONFIG.tempPath);
    }

    run(`git remote set-url origin ${CONFIG.repoUrl}`, CONFIG.tempPath);
    run(`git fetch origin ${CONFIG.branch}`, CONFIG.tempPath);
    run(`git reset --hard origin/${CONFIG.branch}`, CONFIG.tempPath);

    log(`Waiting ${CONFIG.delayMs / 1000}s...`, "cyan");
    await sleep(CONFIG.delayMs);

    // STEP 2: Copy folders/files to production
    log("[STEP 2] Copy updated code + dependency files to production", "yellow");

    for (const folder of CONFIG.copyFolders) {
      const src = path.join(CONFIG.tempPath, folder);
      const dest = path.join(CONFIG.projectPath, folder);
      copyFolderClean(src, dest);
    }

    for (const file of CONFIG.copyFiles) {
      const src = path.join(CONFIG.tempPath, file);
      const dest = path.join(CONFIG.projectPath, file);
      copyFileIfExists(src, dest);
    }

    log(`Waiting ${CONFIG.delayMs / 1000}s...`, "cyan");
    await sleep(CONFIG.delayMs);

    // STEP 3: npm install (explicit start/end logs)
log("[STEP 3] npm install START", "yellow");
const installStart = Date.now();

// Ensure devDependencies are installed even on servers with production env
run("npm install --include=dev", CONFIG.projectPath, {
  env: { NODE_ENV: "development" }, // safest
});

const installSecs = ((Date.now() - installStart) / 1000).toFixed(2);
log(`[STEP 3] npm install END (took ${installSecs}s)`, "yellow");

    // STEP 3.1: verify deps
    log("[STEP 3.1] Verify node_modules + required dependencies", "yellow");
    verifyNodeModulesAndDeps();

    log(`Waiting ${CONFIG.delayMs / 1000}s...`, "cyan");
    await sleep(CONFIG.delayMs);

    // STEP 3.2: Clear .next cache before build
    log("[STEP 3.2] Clear .next cache before build", "yellow");
    const nextCachePath = path.join(CONFIG.projectPath, ".next");
    if (fs.existsSync(nextCachePath)) {
      fs.rmSync(nextCachePath, { recursive: true, force: true });
      log("Cleared .next cache", "green");
    } else {
      log(".next folder not found, skipping clear", "cyan");
    }

    // STEP 4: build
    log("[STEP 4] npm run build START", "yellow");
    const buildStart = Date.now();

    run("npm run build", CONFIG.projectPath, { timeout: 0 });

    const buildSecs = ((Date.now() - buildStart) / 1000).toFixed(2);
    log(`[STEP 4] npm run build END (took ${buildSecs}s)`, "yellow");

    // STEP 5: restart
    log("[STEP 5] pm2 restart all", "yellow");
    run(CONFIG.pm2RestartCmd, CONFIG.projectPath);

    const secs = ((Date.now() - start) / 1000).toFixed(2);
    log("============================================================", "bright");
    log(`Deployment completed successfully in ${secs}s`, "green");
    log("============================================================", "bright");
    process.exit(0);
  } catch (err) {
    const secs = ((Date.now() - start) / 1000).toFixed(2);
    log("============================================================", "red");
    log(`Deployment FAILED in ${secs}s`, "red");
    log(`Error: ${err.message}`, "red");
    log("============================================================", "red");
    process.exit(1);
  }
}

deploy();
