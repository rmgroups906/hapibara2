export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  time: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  story: string;
  hapiAdvice: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: number;
  category: 'lifestyle' | 'food' | 'wellness' | 'community';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'calm-kits' | 'wellness' | 'merch' | 'digital';
  label: 'Energy' | 'Calm' | 'Cozy' | "Hapi's Pick";
  rating: number;
  inStock: boolean;
  features: string[];
  hapiNote: string;
}

export interface CommunityStory {
  id: string;
  title: string;
  story: string;
  author: string;
  image: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image: string;
  title: string;
}