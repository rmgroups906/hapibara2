import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  role: 'user' | 'admin';
  isEmailVerified: boolean;
  preferences: {
    dietaryRestrictions: string[];
    favoriteCategories: string[];
    newsletter: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IRecipe extends Document {
  _id: string;
  title: string;
  description: string;
  image: string;
  time: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  story: string;
  hapiAdvice: string;
  difficulty: 'easy' | 'medium' | 'hard';
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  author: string;
  likes: string[];
  saves: string[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBlogPost extends Document {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: 'lifestyle' | 'food' | 'wellness' | 'community';
  tags: string[];
  readTime: number;
  isPublished: boolean;
  publishedAt?: Date;
  likes: string[];
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProduct extends Document {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  comparePrice?: number;
  images: string[];
  category: 'calm-kits' | 'wellness' | 'merch' | 'digital';
  label: 'Energy' | 'Calm' | 'Cozy' | "Hapi's Pick";
  features: string[];
  hapiNote: string;
  inventory: {
    quantity: number;
    sku: string;
    trackQuantity: boolean;
  };
  seo: {
    title: string;
    description: string;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICommunityStory extends Document {
  _id: string;
  title: string;
  story: string;
  author: string;
  authorEmail: string;
  image?: string;
  isApproved: boolean;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrder extends Document {
  _id: string;
  user: string;
  items: {
    product: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface INewsletter extends Document {
  _id: string;
  email: string;
  isActive: boolean;
  preferences: {
    recipes: boolean;
    blog: boolean;
    products: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthRequest extends Request {
  user?: IUser;
}

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}