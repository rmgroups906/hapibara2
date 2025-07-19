import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User';
import Recipe from '../models/Recipe';
import BlogPost from '../models/BlogPost';
import Product from '../models/Product';
import CommunityStory from '../models/CommunityStory';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hapibara');
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Recipe.deleteMany({});
    await BlogPost.deleteMany({});
    await Product.deleteMany({});
    await CommunityStory.deleteMany({});

    // Create admin user
    const adminUser = await User.create({
      name: 'Hapi Admin',
      email: 'admin@hapibara.com',
      password: 'password123',
      role: 'admin',
      isEmailVerified: true
    });

    // Create regular user
    const regularUser = await User.create({
      name: 'Luna Park',
      email: 'luna@example.com',
      password: 'password123',
      role: 'user',
      isEmailVerified: true
    });

    console.log('Users created');

    // Create recipes
    const recipes = [
      {
        title: 'Coconut Chickpea Stew Kit',
        description: 'A warming, protein-rich stew that brings comfort to any day.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        time: 25,
        servings: 4,
        ingredients: [
          '1 can coconut milk',
          '1 can chickpeas, drained',
          '2 cups vegetable broth',
          '1 onion, diced',
          '3 cloves garlic, minced',
          '1 tsp turmeric',
          '1 tsp cumin',
          '2 cups spinach',
          'Salt and pepper to taste'
        ],
        instructions: [
          'Heat oil in a large pot over medium heat',
          'Sauté onion and garlic until fragrant',
          'Add spices and cook for 1 minute',
          'Add coconut milk, broth, and chickpeas',
          'Simmer for 15 minutes',
          'Add spinach and cook until wilted',
          'Season with salt and pepper'
        ],
        tags: ['cozy', 'protein-rich', 'one-pot'],
        story: 'Inspired by rainy afternoons when you need something warm and nourishing.',
        hapiAdvice: 'Perfect for when you need grounding energy and comfort.',
        difficulty: 'easy',
        nutrition: {
          calories: 320,
          protein: 12,
          carbs: 28,
          fat: 18
        },
        author: adminUser._id,
        isPublished: true
      },
      {
        title: 'Energy Morning Bowl',
        description: 'Start your day with gentle power',
        image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
        time: 10,
        servings: 1,
        ingredients: [
          '1 cup rolled oats',
          '1 banana, sliced',
          '2 tbsp almond butter',
          '1 tbsp chia seeds',
          '1 cup oat milk',
          'Handful of berries',
          '1 tsp maple syrup',
          'Pinch of cinnamon'
        ],
        instructions: [
          'Cook oats with oat milk until creamy',
          'Top with sliced banana and berries',
          'Drizzle with almond butter and maple syrup',
          'Sprinkle chia seeds and cinnamon',
          'Eat mindfully and slowly'
        ],
        tags: ['energy', '5-ingredients', '<15-mins', 'breakfast'],
        story: 'Created for those gentle mornings when you want sustained energy without the crash.',
        hapiAdvice: 'Eat this when you want to feel grounded but energized.',
        difficulty: 'easy',
        nutrition: {
          calories: 450,
          protein: 15,
          carbs: 65,
          fat: 16
        },
        author: adminUser._id,
        isPublished: true
      }
    ];

    const createdRecipes = await Recipe.insertMany(recipes);
    console.log('Recipes created');

    // Create blog posts
    const blogPosts = [
      {
        title: 'Why I Romanticize Capybaras',
        excerpt: 'In a world that demands urgency, capybaras teach us the art of simply being.',
        content: 'Capybaras have become my spirit animal, and here\'s why. In a world that constantly demands urgency, productivity, and hustle, these gentle giants remind us of a different way of being. They move slowly, they rest often, and they seem to find joy in the simplest moments. This is the energy I want to bring to my daily life.',
        image: 'https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&w=800',
        author: adminUser._id,
        category: 'lifestyle',
        tags: ['mindfulness', 'slow-living', 'philosophy'],
        readTime: 5,
        isPublished: true
      },
      {
        title: 'How I Built a 5-Minute Night Ritual',
        excerpt: 'Small moments of intentionality can transform your evenings from chaotic to calm.',
        content: 'Creating a simple evening ritual has been one of the most transformative practices in my life. It doesn\'t require expensive products or hours of time - just five minutes of intentional presence. Here\'s how I do it and how you can create your own.',
        image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
        author: adminUser._id,
        category: 'wellness',
        tags: ['rituals', 'evening', 'self-care'],
        readTime: 7,
        isPublished: true
      }
    ];

    const createdBlogPosts = await BlogPost.insertMany(blogPosts);
    console.log('Blog posts created');

    // Create products
    const products = [
      {
        name: 'Hapi Calm Box',
        description: 'A curated collection of items to help you find your center.',
        price: 39.99,
        images: ['https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=800'],
        category: 'calm-kits',
        label: 'Calm',
        features: ['Chamomile tea blend', 'Lavender sachet', 'Meditation guide', 'Soft journal'],
        hapiNote: 'Use this during foggy afternoons when you need gentle grounding 🌫️',
        inventory: {
          quantity: 50,
          sku: 'HCB001',
          trackQuantity: true
        },
        seo: {
          title: 'Hapi Calm Box - Mindful Living Kit',
          description: 'Find your center with our curated calm box featuring tea, aromatherapy, and mindfulness tools.'
        },
        isActive: true
      },
      {
        name: 'Morning Ritual Kit',
        description: 'Start your day with intention',
        price: 29.99,
        images: ['https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'],
        category: 'calm-kits',
        label: 'Energy',
        features: ['Energizing tea blend', 'Morning journal prompts', 'Aromatherapy rollerball'],
        hapiNote: 'Perfect for creating peaceful morning moments ☀️',
        inventory: {
          quantity: 30,
          sku: 'MRK001',
          trackQuantity: true
        },
        seo: {
          title: 'Morning Ritual Kit - Mindful Start',
          description: 'Begin each day with intention using our morning ritual essentials.'
        },
        isActive: true
      }
    ];

    const createdProducts = await Product.insertMany(products);
    console.log('Products created');

    // Create community stories
    const communityStories = [
      {
        title: 'How Hapibara helped me quit burnout meals',
        story: 'I used to survive on takeout and energy drinks. Hapibara taught me that nourishing myself could be simple, gentle, and healing. The recipes are so approachable, and the community made me feel less alone in my journey.',
        author: 'Alex Thompson',
        authorEmail: 'alex@example.com',
        image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=800',
        isApproved: true,
        isPublished: true
      },
      {
        title: 'Slow mornings saved my marriage',
        story: 'Starting our days with Hapibara rituals gave us space to connect before the chaos began. Our relationship feels calmer and more intentional. We actually talk to each other now instead of rushing past each other.',
        author: 'Jamie & Pat Wilson',
        authorEmail: 'jamie@example.com',
        image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
        isApproved: true,
        isPublished: true
      }
    ];

    const createdStories = await CommunityStory.insertMany(communityStories);
    console.log('Community stories created');

    console.log('✅ Seed data created successfully!');
    console.log(`👤 Admin user: admin@hapibara.com / password123`);
    console.log(`👤 Regular user: luna@example.com / password123`);
    console.log(`📝 Created ${createdRecipes.length} recipes`);
    console.log(`📰 Created ${createdBlogPosts.length} blog posts`);
    console.log(`🛍️ Created ${createdProducts.length} products`);
    console.log(`💬 Created ${createdStories.length} community stories`);

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seed script
connectDB().then(() => {
  seedData();
});