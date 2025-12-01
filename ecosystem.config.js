module.exports = {
  apps: [
    {
      name: 'admin-bot',
      script: './admin_bot/bot.py',
      interpreter: 'python3',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',  // Reduced for free tier
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/admin_bot_error.log',
      out_file: './logs/admin_bot_out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      time: true,
      output_file: './logs/admin_bot_combined.log',
      error_file: './logs/admin_bot_error.log'
    },
    {
      name: 'user-bot',
      script: './user_bot/bot.py',
      interpreter: 'python3',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',  // Reduced for free tier
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/user_bot_error.log',
      out_file: './logs/user_bot_out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      time: true
    },
    {
      name: 'verify-server',
      script: './verification_server/app.py',
      interpreter: 'python3',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',  // Reduced for free tier
      env: {
        NODE_ENV: 'production',
        FLASK_ENV: 'production'
      },
      error_file: './logs/verify_server_error.log',
      out_file: './logs/verify_server_out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss'
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'your-ec2-instance-ip',
      ref: 'origin/main',
      repo: 'your-repo-url',
      path: '/home/ubuntu/telegram-file-system',
      'post-deploy': 'npm install && pm2 start ecosystem.config.js'
    }
  }
};
