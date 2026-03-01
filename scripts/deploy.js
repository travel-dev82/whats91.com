#!/usr/bin/env node

/**
 * Deploy script for whats91.com
 * 
 * CRITICAL: This script MUST be run with cwd set to project root
 * All paths are resolved relative to projectPath
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
  copyFolders: ["src", "prisma", "scripts", "public"],
  copyFiles: [
    "package.json",
    "package-lock.json",
    // optional configs
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
};

// ====== Pretty logs ======
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
};

function log(message, color = "reset") {
  const ts = new Date().toISOString();
  console.log(`${colors[color]}[${ts}] [deploy] ${message}${colors.reset}`);
}

function logSection(title) {
  console.log("");
  log("═".repeat(60), "bright");
  log(`  ${title}`, "bright");
  log("═".repeat(60), "bright");
  console.log("");
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
  log(`  CWD: ${cwd}`, "magenta");

  const env = { ...process.env, ...(opts.env || {}) };
  delete env.NODE_ENV; // Let npm handle NODE_ENV

  execSync(command, {
    cwd,
    stdio: "inherit",
    env,
    timeout: opts.timeout ?? 0,
  });
}

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

function clearCacheFolders() {
  log("Clearing all cache folders...", "yellow");
  
  const cachePaths = [
    ".next",                          // Next.js build cache
    "node_modules/.cache",            // General npm cache
    "node_modules/.prisma",           // Prisma generated client cache
  ];

  for (const relPath of cachePaths) {
    const fullPath = path.join(CONFIG.projectPath, relPath);
    if (fs.existsSync(fullPath)) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      log(`Cleared: ${relPath}`, "green");
    } else {
      log(`Not found (skip): ${relPath}`, "cyan");
    }
  }
}

async function deploy() {
  const start = Date.now();
  
  logSection("DEPLOYMENT STARTING");
  
  // Log environment info
  log("Environment Information:", "bright");
  log(`  Process CWD: ${process.cwd()}`, "magenta");
  log(`  Project Path: ${CONFIG.projectPath}`, "magenta");
  log(`  Temp Path: ${CONFIG.tempPath}`, "magenta");
  log(`  Branch: ${CONFIG.branch}`, "magenta");
  log(`  Node Version: ${process.version}`, "magenta");
  log(`  USER: ${process.env.USER || 'not set'}`, "magenta");
  log(`  HOME: ${process.env.HOME || 'not set'}`, "magenta");
  
  // Verify project path exists
  if (!fs.existsSync(CONFIG.projectPath)) {
    throw new Error(`Project path does not exist: ${CONFIG.projectPath}`);
  }

  try {
    // STEP 1: Pull to temp
    logSection("STEP 1: Pull latest code into temp folder");
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

    // Log what we pulled
    log("Latest commit in temp:", "cyan");
    run(`git log -1 --oneline`, CONFIG.tempPath);

    log(`Waiting ${CONFIG.delayMs / 1000}s...`, "cyan");
    await sleep(CONFIG.delayMs);

    // STEP 2: Copy folders/files to production
    logSection("STEP 2: Copy updated code to production");

    for (const folder of CONFIG.copyFolders) {
      const src = path.join(CONFIG.tempPath, folder);
      const dest = path.join(CONFIG.projectPath, folder);
      try {
        copyFolderClean(src, dest);
      } catch (err) {
        log(`Warning: Could not copy folder ${folder}: ${err.message}`, "yellow");
      }
    }

    for (const file of CONFIG.copyFiles) {
      const src = path.join(CONFIG.tempPath, file);
      const dest = path.join(CONFIG.projectPath, file);
      copyFileIfExists(src, dest);
    }

    log(`Waiting ${CONFIG.delayMs / 1000}s...`, "cyan");
    await sleep(CONFIG.delayMs);

    // STEP 3: Clear ALL caches
    logSection("STEP 3: Clear all caches");
    clearCacheFolders();

    log(`Waiting ${CONFIG.delayMs / 1000}s...`, "cyan");
    await sleep(CONFIG.delayMs);

    // STEP 4: npm install
    logSection("STEP 4: npm install");
    const installStart = Date.now();
    run("npm install", CONFIG.projectPath);
    const installSecs = ((Date.now() - installStart) / 1000).toFixed(2);
    log(`npm install completed in ${installSecs}s`, "green");

    log(`Waiting ${CONFIG.delayMs / 1000}s...`, "cyan");
    await sleep(CONFIG.delayMs);

    // STEP 5: Build
    logSection("STEP 5: npm run build");
    const buildStart = Date.now();
    run("npm run build", CONFIG.projectPath, { timeout: 600000 });
    const buildSecs = ((Date.now() - buildStart) / 1000).toFixed(2);
    log(`Build completed in ${buildSecs}s`, "green");

    // STEP 6: Restart PM2
    logSection("STEP 6: pm2 restart");
    run(CONFIG.pm2RestartCmd, CONFIG.projectPath);

    const totalSecs = ((Date.now() - start) / 1000).toFixed(2);
    logSection("DEPLOYMENT SUCCESSFUL");
    log(`Total time: ${totalSecs}s`, "green");
    
    process.exit(0);
  } catch (err) {
    const totalSecs = ((Date.now() - start) / 1000).toFixed(2);
    logSection("DEPLOYMENT FAILED");
    log(`Error: ${err.message}`, "red");
    log(`Stack: ${err.stack}`, "red");
    log(`Total time: ${totalSecs}s`, "red");
    
    process.exit(1);
  }
}

deploy();
