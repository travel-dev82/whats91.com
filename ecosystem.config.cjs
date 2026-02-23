const path = require('path');

/** @type {import('pm2').StartOptions} */
module.exports = {
  apps: [
    {
      name: 'whats91',
      script: 'server.js',
      cwd: path.join(__dirname, '.next', 'standalone'),
      interpreter: 'bun',
      env: { NODE_ENV: 'production' },
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
};
