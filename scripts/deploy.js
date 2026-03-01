#!/usr/bin/env node

/**
 * Deploy script for whats91.com
 * Uses spawn with completely isolated environment
 */

const { spawn } = require("child_process");
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

  copyFolders: ["src", "prisma", "scripts", "public"],
  copyFiles: [
    "package.json",
    "package-lock.json",
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

// ====== Logging ======
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

/**
 * Run a command with CLEAN environment
 * CRITICAL: Explicitly set PATH and HOME to ensure npm/node work correctly
 */
function runCommand(command, args, cwd) {
  return new Promise((resolve, reject) => {
    log(`Running: ${command} ${args.join(" ")}`, "cyan");
    log(`  CWD: ${cwd}`, "magenta");
    
    // Build a CLEAN environment - don't inherit potentially polluted vars
    const cleanEnv = {
      HOME: process.env.HOME || "/home/whats91",
      USER: process.env.USER || "whats91",
      PATH: process.env.PATH,
      NODE_PATH: process.env.NODE_PATH,
      NVM_DIR: process.env.NVM_DIR,
      NVM_INC: process.env.NVM_INC,
      GITHUB_WEBHOOK_PROJECT_PATH: CONFIG.projectPath,
    };
    
    // Add NVM path if available
    if (process.env.NVM_DIR) {
      cleanEnv.PATH = `${process.env.NVM_DIR}/versions/node/v20.19.0/bin:${cleanEnv.PATH}`;
    }
    
    log(`  PATH: ${cleanEnv.PATH?.substring(0, 100)}...`, "magenta");
    log(`  HOME: ${cleanEnv.HOME}`, "magenta");
    
    const child = spawn(command, args, {
      cwd,
      stdio: "inherit",
      env: cleanEnv,
      shell: true,
    });
    
    child.on("error", (error) => {
      log(`Process error: ${error.message}`, "red");
      reject(error);
    });
    
    child.on("exit", (code, signal) => {
      if (code === 0) {
        resolve({ code, signal });
      } else {
        const error = new Error(`Command failed with code ${code}, signal ${signal}`);
        error.code = code;
        reject(error);
      }
    });
  });
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    log(`Created directory: ${dir}`, "yellow");
  }
}

function copyFolderClean(src, dest) {
  if (src.includes("node_modules") || dest.includes("node_modules")) {
    throw new Error(`Safety: node_modules path detected`);
  }

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
  if (src.includes("node_modules") || dest.includes("node_modules")) {
    return false;
  }
  if (!fs.existsSync(src)) return false;
  fs.copyFileSync(src, dest);
  log(`Copied file: ${path.basename(src)}`, "green");
  return true;
}

function clearCacheFolders() {
  log("Clearing all cache folders...", "yellow");
  
  const cachePaths = [
    ".next",
    "node_modules/.cache",
    "node_modules/.prisma",
    "node_modules/@prisma/client",
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
  log(`  PATH: ${process.env.PATH?.substring(0, 100)}...`, "magenta");
  
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
      await runCommand("git", ["init"], CONFIG.tempPath);
      await runCommand("git", ["remote", "add", "origin", CONFIG.repoUrl], CONFIG.tempPath);
    }

    await runCommand("git", ["remote", "set-url", "origin", CONFIG.repoUrl], CONFIG.tempPath);
    await runCommand("git", ["fetch", "origin", CONFIG.branch], CONFIG.tempPath);
    await runCommand("git", ["reset", "--hard", `origin/${CONFIG.branch}`], CONFIG.tempPath);
    await runCommand("git", ["log", "-1", "--oneline"], CONFIG.tempPath);

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
    await runCommand("npm", ["install"], CONFIG.projectPath);
    const installSecs = ((Date.now() - installStart) / 1000).toFixed(2);
    log(`npm install completed in ${installSecs}s`, "green");

    log(`Waiting ${CONFIG.delayMs / 1000}s...`, "cyan");
    await sleep(CONFIG.delayMs);

    // STEP 5: Build
    logSection("STEP 5: npm run build");
    const buildStart = Date.now();
    await runCommand("npm", ["run", "build"], CONFIG.projectPath);
    const buildSecs = ((Date.now() - buildStart) / 1000).toFixed(2);
    log(`Build completed in ${buildSecs}s`, "green");

    // STEP 6: Restart PM2
    logSection("STEP 6: pm2 restart");
    await runCommand(CONFIG.pm2RestartCmd, [], CONFIG.projectPath);

    const totalSecs = ((Date.now() - start) / 1000).toFixed(2);
    logSection("DEPLOYMENT SUCCESSFUL");
    log(`Total time: ${totalSecs}s`, "green");
    
    process.exit(0);
  } catch (err) {
    const totalSecs = ((Date.now() - start) / 1000).toFixed(2);
    logSection("DEPLOYMENT FAILED");
    log(`Error: ${err.message}`, "red");
    if (err.stack) {
      log(`Stack: ${err.stack}`, "red");
    }
    log(`Total time: ${totalSecs}s`, "red");
    
    process.exit(1);
  }
}

deploy();
