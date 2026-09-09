/**
 * PM2 ecosystem para CloudPanel.
 * PORT / HOSTNAME / secrets vêm do .env (carregado em remote-restart.sh).
 */
module.exports = {
  apps: [
    {
      name: "mkaligners",
      cwd: __dirname + "/..",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        NEXT_TELEMETRY_DISABLED: "1",
        PORT: "3003",
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
