# Telegram File Distribution System

A comprehensive Telegram bot system for distributing ZIP files with verification and force subscribe features.

## Features
- Admin bot for file management
- User bot for file distribution
- Force subscribe channels
- User verification system
- Auto-delete messages
- Broadcast functionality
- User analytics

## Setup
1. Install dependencies: `pip install -r requirements.txt`
2. Configure `.env` file with your credentials
3. Run setup script: `bash scripts/setup.sh`
4. Start bots using PM2: `pm2 start ecosystem.config.js`

## Structure
- `admin_bot/` - Admin bot for file uploads and management
- `user_bot/` - User-facing bot for downloads
- `verification_server/` - Web server for verification flow
- `database/` - MongoDB operations and models
- `shared/` - Shared utilities and constants

## Requirements
- Python 3.8+
- MongoDB
- PM2 (for process management)
- AWS EC2 instance

## License
Private Project
