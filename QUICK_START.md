# 🚀 Quick Start Guide - Hapibara Project

## ⚡ Super Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm run setup
```

### 2. Start MongoDB
```bash
# macOS with Homebrew
brew services start mongodb-community

# Ubuntu/Debian
sudo systemctl start mongod

# Windows: Start MongoDB service from Services panel
```

### 3. Seed Database (Optional)
```bash
npm run seed
```

### 4. Start Both Servers

**Terminal 1 - Backend:**
```bash
npm run start:backend
```

**Terminal 2 - Frontend:**
```bash
npm run start:frontend
```

## 🌐 Access Points

- **Website**: http://localhost:5173
- **API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## 🔐 Test Accounts (after seeding)

- **Admin**: `admin@hapibara.com` / `password123`
- **User**: `luna@example.com` / `password123`

## 🎯 What to Test

1. **Homepage** - Browse the calm, capybara-inspired design
2. **Recipes** - Filter recipes and view detailed recipe pages
3. **Community** - Read blog posts and community stories
4. **Marketplace** - Browse products with categories and filters
5. **API** - Test authentication and CRUD operations

## 🔧 If Something Goes Wrong

1. **Check MongoDB is running**: `brew services list | grep mongodb`
2. **Check ports are free**: `lsof -ti:5000` and `lsof -ti:5173`
3. **Restart everything**: Kill terminals and start again
4. **Reset database**: `npm run seed`

That's it! You should now have a fully functional Hapibara website running locally. 🦌✨