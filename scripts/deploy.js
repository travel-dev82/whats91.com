#!/usr/bin/env node

/**
 * Standalone Deployment Script for Whats91.com
 * Triggered by GitHub webhook to deploy latest code
 * 
 * Usage: node scripts/deploy.js
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Configuration
const CONFIG = {
  // Production project path
  projectPath: process.env.GITHUB_WEBHOOK_PROJECT_PATH || '/home/whats91/htdocs/whats91.com',
  
  // Temp directory for git operations
  tempPath: process.env.DEPLOY_TEMP_PATH || '/home/whats91/htdocs/whats91.com/temp',
  
  // Git repository URL
  repoUrl: 'https://github.com/travel-dev82/whats91.com.git',
  
  // Branch to deploy
  branch: process.env.GITHUB_WEBHOOK_BRANCH || 'main',
  
  // PM2 process name
  pm2Process: process.env.PM2_PROCESS_NAME || 'whats91',
  
  // Delay between steps (ms)
  delayMs: 5000,
  
  // Folders to update (only these will be copied)
  updateFolders: ['src', 'prisma', 'scripts', 'public'],
  
  // Files to preserve (won't be overwritten)
  preserveFiles: ['.env', 'db/custom.db'],
  
  // Files to copy from temp root
  copyFiles: ['package.json', 'package-lock.json', 'bun.lockb', 'next.config.ts', 'tsconfig.json', 'tailwind.config.ts', 'postcss.config.mjs', 'components.json', 'ecosystem.config.cjs'],
};

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  const timestamp = new Date().toISOString();
  console.log(`${colors[color]}[${timestamp}] [deploy] ${message}${colors.reset}`);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function runCommand(command, cwd, options = {}) {
  log(`Running: ${command}`, 'cyan');
  
  try {
    const result = execSync(command, {
      cwd,
      encoding: 'utf8',
      stdio: options.silent ? 'pipe' : 'inherit',
      timeout: options.timeout || 300000, // 5 min timeout
      env: { ...process.env, NODE_ENV: 'production' },
    });
    return { success: true, output: result };
  } catch (error) {
    if (options.continueOnError) {
      log(`Command failed but continuing: ${command}`, 'yellow');
      log(error.message, 'yellow');
      return { success: false, error: error.message };
    }
    throw error;
  }
}

function ensureDirectory(dir) {
  if (!fs.existsSync(dir)) {
    log(`Creating directory: ${dir}`, 'yellow');
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFolder(src, dest) {
  log(`Copying: ${src} -> ${dest}`, 'cyan');
  
  // Remove destination if exists
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  
  // Copy recursively
  fs.cpSync(src, dest, { recursive: true });
}

function copyFile(src, dest) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    log(`Copied: ${path.basename(src)}`, 'cyan');
  }
}

async function deploy() {
  const startTime = Date.now();
  log('='.repeat(60), 'bright');
  log('Starting deployment process', 'bright');
  log('='.repeat(60), 'bright');
  
  try {
    // Step 1: Setup temp directory
    log('\n[STEP 1] Setting up temp directory...', 'yellow');
    ensureDirectory(CONFIG.tempPath);
    
    // Check if temp is a git repo, if not initialize
    const tempGitDir = path.join(CONFIG.tempPath, '.git');
    if (!fs.existsSync(tempGitDir)) {
      log('Initializing git repository in temp directory...', 'cyan');
      runCommand('git init', CONFIG.tempPath);
      runCommand(`git remote add origin ${CONFIG.repoUrl}`, CONFIG.tempPath, { continueOnError: true });
    }
    
    // Step 2: Fetch latest code
    log('\n[STEP 2] Fetching latest code from GitHub...', 'yellow');
    runCommand(`git fetch origin ${CONFIG.branch}`, CONFIG.tempPath);
    runCommand(`git reset --hard origin/${CONFIG.branch}`, CONFIG.tempPath);
    
    log(`Waiting ${CONFIG.delayMs / 1000} seconds...`, 'cyan');
    await sleep(CONFIG.delayMs);
    
    // Step 3: Copy files to production
    log('\n[STEP 3] Updating production files...', 'yellow');
    
    // Backup preserved files
    const backups = {};
    for (const file of CONFIG.preserveFiles) {
      const filePath = path.join(CONFIG.projectPath, file);
      if (fs.existsSync(filePath)) {
        backups[file] = fs.readFileSync(filePath);
        log(`Backed up: ${file}`, 'cyan');
      }
    }
    
    // Copy folders
    for (const folder of CONFIG.updateFolders) {
      const srcPath = path.join(CONFIG.tempPath, folder);
      const destPath = path.join(CONFIG.projectPath, folder);
      
      if (fs.existsSync(srcPath)) {
        copyFolder(srcPath, destPath);
      } else {
        log(`Source folder not found: ${srcPath}`, 'yellow');
      }
    }
    
    // Copy root files
    for (const file of CONFIG.copyFiles) {
      const srcPath = path.join(CONFIG.tempPath, file);
      const destPath = path.join(CONFIG.projectPath, file);
      copyFile(srcPath, destPath);
    }
    
    // Restore preserved files
    for (const [file, content] of Object.entries(backups)) {
      const filePath = path.join(CONFIG.projectPath, file);
      fs.writeFileSync(filePath, content);
      log(`Restored: ${file}`, 'cyan');
    }
    
    log(`Waiting ${CONFIG.delayMs / 1000} seconds...`, 'cyan');
    await sleep(CONFIG.delayMs);
    
    // Step 4: Clean and install dependencies
    log('\n[STEP 4] Installing dependencies...', 'yellow');
    
    // Clear Next.js cache
    const nextCachePath = path.join(CONFIG.projectPath, '.next');
    if (fs.existsSync(nextCachePath)) {
      log('Clearing .next cache...', 'cyan');
      fs.rmSync(nextCachePath, { recursive: true, force: true });
    }
    
    // Clear node_modules/.cache if exists
    const cachePath = path.join(CONFIG.projectPath, 'node_modules', '.cache');
    if (fs.existsSync(cachePath)) {
      log('Clearing node_modules cache...', 'cyan');
      fs.rmSync(cachePath, { recursive: true, force: true });
    }
    
    runCommand('npm install', CONFIG.projectPath);
    
    log(`Waiting ${CONFIG.delayMs / 1000} seconds...`, 'cyan');
    await sleep(CONFIG.delayMs);
    
    // Step 5: Build project
    log('\n[STEP 5] Building project...', 'yellow');
    runCommand('npm run build', CONFIG.projectPath, { timeout: 600000 }); // 10 min timeout for build
    
    log(`Waiting ${CONFIG.delayMs / 1000} seconds...`, 'cyan');
    await sleep(CONFIG.delayMs);
    
    // Step 6: Restart PM2
    log('\n[STEP 6] Restarting PM2 process...', 'yellow');
    if (CONFIG.pm2Process === 'all') {
      runCommand('pm2 restart all', CONFIG.projectPath);
    } else {
      runCommand(`pm2 restart ${CONFIG.pm2Process}`, CONFIG.projectPath);
    }
    
    // Done!
    const duration = Date.now() - startTime;
    log('\n' + '='.repeat(60), 'bright');
    log(`Deployment completed successfully!`, 'green');
    log(`Duration: ${(duration / 1000).toFixed(2)} seconds`, 'green');
    log('='.repeat(60), 'bright');
    
    process.exit(0);
  } catch (error) {
    const duration = Date.now() - startTime;
    log('\n' + '='.repeat(60), 'red');
    log(`Deployment failed after ${(duration / 1000).toFixed(2)} seconds`, 'red');
    log(`Error: ${error.message}`, 'red');
    log('='.repeat(60), 'red');
    
    process.exit(1);
  }
}

// Run deployment
deploy();
