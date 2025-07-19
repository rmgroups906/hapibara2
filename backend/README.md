# Hapibara Backend API

A complete Node.js/Express backend for the Hapibara lifestyle brand website, featuring user authentication, content management, and e-commerce functionality.

## Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **User Management**: Registration, login, profile management
- **Recipe System**: CRUD operations with likes, saves, and filtering
- **Blog/CMS**: Content management with categories and tags
- **Product Catalog**: E-commerce ready with inventory management
- **Community Features**: User-submitted stories with moderation
- **Newsletter**: Subscription management with preferences
- **File Uploads**: Image handling with Cloudinary integration
- **Email System**: Automated emails for welcome, confirmations
- **Data Validation**: Comprehensive input validation and sanitization
- **Security**: Rate limiting, CORS, helmet, input validation

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Cloudinary
- **Email**: Nodemailer
- **Validation**: Express-validator
- **Security**: Helmet, CORS, Rate limiting

## Quick Start

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start MongoDB**
   Make sure MongoDB is running locally or update MONGODB_URI in .env

4. **Seed Database** (Optional)
   ```bash
   npm run seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/change-password` - Change password

### Recipes
- `GET /api/recipes` - Get all recipes (with filtering)
- `GET /api/recipes/:id` - Get single recipe
- `POST /api/recipes` - Create recipe (auth required)
- `PUT /api/recipes/:id` - Update recipe (auth required)
- `DELETE /api/recipes/:id` - Delete recipe (auth required)
- `POST /api/recipes/:id/like` - Like/unlike recipe (auth required)
- `POST /api/recipes/:id/save` - Save/unsave recipe (auth required)

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:slug` - Get single blog post
- `POST /api/blog` - Create blog post (admin only)
- `PUT /api/blog/:id` - Update blog post (admin only)
- `DELETE /api/blog/:id` - Delete blog post (admin only)
- `POST /api/blog/:id/like` - Like/unlike post (auth required)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:slug` - Get single product
- `GET /api/products/featured` - Get featured products
- `GET /api/products/category/:category` - Get products by category
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Community
- `GET /api/community` - Get approved community stories
- `GET /api/community/:id` - Get single community story
- `POST /api/community/submit` - Submit community story
- `GET /api/community/admin/all` - Get all stories (admin only)
- `PUT /api/community/admin/:id/approve` - Approve story (admin only)
- `DELETE /api/community/admin/:id` - Delete story (admin only)

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter
- `PUT /api/newsletter/preferences` - Update preferences
- `GET /api/newsletter/stats` - Get newsletter stats (admin only)

## Database Models

### User
- Personal information (name, email, avatar)
- Authentication (password, role)
- Preferences (dietary restrictions, categories, newsletter)
- Email verification status

### Recipe
- Content (title, description, image, story)
- Instructions (ingredients, steps, time, servings)
- Metadata (tags, difficulty, nutrition)
- Social features (likes, saves)
- Publishing status

### BlogPost
- Content (title, excerpt, content, image)
- Metadata (category, tags, read time)
- SEO (slug, meta description)
- Analytics (views, likes)
- Publishing workflow

### Product
- Product info (name, description, price, images)
- Categorization (category, label, features)
- Inventory management
- SEO optimization

### CommunityStory
- User-generated content
- Moderation workflow (approval, publishing)
- Author information

### Newsletter
- Email subscription management
- Preference settings
- Active/inactive status

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **Rate Limiting**: Prevents abuse and DDoS attacks
- **Input Validation**: Comprehensive validation and sanitization
- **CORS Configuration**: Controlled cross-origin requests
- **Helmet**: Security headers
- **Role-based Access**: Admin vs user permissions

## File Upload

Images are handled through Cloudinary with automatic optimization:
- Automatic resizing and compression
- Multiple format support
- CDN delivery
- Secure upload with validation

## Email System

Automated emails for:
- Welcome messages for new users
- Newsletter confirmations
- Password reset (can be extended)
- Admin notifications (can be extended)

## Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run seed` - Seed database with sample data

### Default Admin Account
After running the seed script:
- Email: `admin@hapibara.com`
- Password: `password123`

### Default User Account
- Email: `luna@example.com`
- Password: `password123`

## Production Deployment

1. Set `NODE_ENV=production` in environment
2. Configure production MongoDB URI
3. Set up Cloudinary account for image uploads
4. Configure SMTP for email sending
5. Use strong JWT secret
6. Set up proper CORS origins
7. Consider using PM2 for process management

## Environment Variables

See `.env.example` for all required environment variables. Key ones include:

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret for JWT token signing
- `CLOUDINARY_*` - Cloudinary credentials for image uploads
- `SMTP_*` - Email service configuration

## API Response Format

All API responses follow a consistent format:

```json
{
  "success": true|false,
  "message": "Human readable message",
  "data": {}, // Response data (if applicable)
  "errors": [] // Validation errors (if applicable)
}
```

## Error Handling

- Comprehensive error handling with appropriate HTTP status codes
- Validation errors with detailed field-level feedback
- Development vs production error responses
- Centralized error handling middleware

This backend provides a solid foundation for the Hapibara website with room for extension and customization based on specific business needs.