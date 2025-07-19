# 🦌 Hapibara - Complete Setup Guide

A beautiful lifestyle website for gentle living with plant-based food, cozy rituals, and mindful moments.

## 📋 Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use MongoDB Atlas (cloud)
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# The project is already set up in your current directory
# Navigate to the project root if not already there
pwd  # Should show /home/project
```

### 2. Install Dependencies

```bash
# Install frontend dependencies (already done)
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### 3. Setup Environment Variables

```bash
# Copy the example environment file
cp backend/.env.example backend/.env

# Edit the environment file with your settings
# The .env file is already configured with default values for local development
```

### 4. Start MongoDB

**Option A: Local MongoDB**
```bash
# Start MongoDB service (varies by OS)
# macOS with Homebrew:
brew services start mongodb-community

# Ubuntu/Debian:
sudo systemctl start mongod

# Windows: Start MongoDB service from Services panel
```

**Option B: MongoDB Atlas (Cloud)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `backend/.env`

### 5. Seed the Database (Optional but Recommended)

```bash
cd backend
npm run seed
cd ..
```

This creates sample data including:
- Admin user: `admin@hapibara.com` / `password123`
- Regular user: `luna@example.com` / `password123`
- Sample recipes, blog posts, products, and community stories

### 6. Start the Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend will run on: `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
# In project root
npm run dev
```
Frontend will run on: `http://localhost:5173`

## 🌐 Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 📁 Project Structure

```
hapibara/
├── src/                    # Frontend React app
│   ├── components/         # Reusable UI components
│   ├── pages/             # Main page components
│   ├── data/              # Mock data and types
│   └── types/             # TypeScript type definitions
├── backend/               # Node.js/Express backend
│   ├── src/
│   │   ├── controllers/   # API route handlers
│   │   ├── models/        # MongoDB schemas
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Auth, validation, etc.
│   │   ├── utils/         # Helper functions
│   │   └── config/        # Database and service configs
│   └── .env              # Environment variables
└── README.md             # This file
```

## 🔧 Development Commands

### Frontend Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Commands
```bash
cd backend
npm run dev          # Start development server with hot reload
npm run build        # Compile TypeScript to JavaScript
npm run start        # Start production server
npm run seed         # Seed database with sample data
```

## 🔐 Authentication

The backend includes JWT-based authentication with the following features:

- User registration and login
- Role-based access (user/admin)
- Protected routes
- Password hashing with bcrypt

### Default Accounts (after seeding)
- **Admin**: `admin@hapibara.com` / `password123`
- **User**: `luna@example.com` / `password123`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (requires auth)

### Recipes
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get single recipe
- `POST /api/recipes` - Create recipe (requires auth)

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:slug` - Get single blog post

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:slug` - Get single product

### Community
- `GET /api/community` - Get community stories
- `POST /api/community/submit` - Submit story

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

## 🎨 Features

### Frontend Features
- ✅ Responsive design with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ TypeScript for type safety
- ✅ React Router for navigation
- ✅ Component-based architecture
- ✅ Mock data ready for API integration

### Backend Features
- ✅ RESTful API with Express.js
- ✅ MongoDB with Mongoose ODM
- ✅ JWT authentication
- ✅ File upload with Cloudinary
- ✅ Email functionality with Nodemailer
- ✅ Input validation and sanitization
- ✅ Rate limiting and security headers
- ✅ Comprehensive error handling

## 🔧 Configuration

### Environment Variables (backend/.env)

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/hapibara

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Cloudinary (optional - for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Email (optional - for notifications)
EMAIL_FROM=noreply@hapibara.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🚨 Troubleshooting

### Common Issues

**1. MongoDB Connection Error**
```bash
# Make sure MongoDB is running
# Check if the service is active
brew services list | grep mongodb  # macOS
sudo systemctl status mongod       # Linux
```

**2. Port Already in Use**
```bash
# Kill process using the port
lsof -ti:5000 | xargs kill -9  # Backend port
lsof -ti:5173 | xargs kill -9  # Frontend port
```

**3. Dependencies Issues**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# For backend
cd backend
rm -rf node_modules package-lock.json
npm install
```

**4. TypeScript Errors**
```bash
# Restart TypeScript server in your editor
# Or run type checking manually
npx tsc --noEmit
```

### Database Issues

**Reset Database:**
```bash
cd backend
# This will clear all data and reseed
npm run seed
```

**Check Database Connection:**
```bash
# Test the health endpoint
curl http://localhost:5000/api/health
```

## 📱 Testing the Application

1. **Visit the homepage** at http://localhost:5173
2. **Browse recipes** - Filter and view recipe details
3. **Read the blog** - Check out community stories
4. **Explore products** - Browse the marketplace
5. **Test authentication** - Register/login with the API

## 🚀 Production Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the 'dist' folder
```

### Backend (Railway/Heroku/DigitalOcean)
```bash
cd backend
npm run build
# Deploy with your preferred service
```

### Environment Setup for Production
- Set `NODE_ENV=production`
- Use production MongoDB URI
- Configure Cloudinary for image uploads
- Set up SMTP for email sending
- Use strong JWT secrets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Need Help?

If you encounter any issues:

1. Check this README for common solutions
2. Verify all prerequisites are installed
3. Ensure MongoDB is running
4. Check the console for error messages
5. Verify environment variables are set correctly

---

**Happy coding! 🦌🌿**

*Built with love for the gentle living community.*