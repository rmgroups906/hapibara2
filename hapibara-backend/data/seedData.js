const Recipe = require('../models/Recipe');
const Product = require('../models/Product');
const BlogPost = require('../models/BlogPost');
const CommunityStory = require('../models/CommunityStory');
const User = require('../models/User');

const seedData = async () => {
  try {
    // Create admin user
    const adminUser = new User({
      name: 'Hapi Admin',
      email: 'admin@hapibara.com',
      password: 'password123',
      role: 'admin'
    });
    await adminUser.save();

    // Seed Recipes
    const recipes = [
      {
        title: 'Coconut Chickpea Curry Bowl',
        slug: 'coconut-chickpea-curry-bowl',
        description: 'Warming spices meet creamy coconut in this nourishing bowl',
        story: "This recipe came to me during a particularly stressful week. I was craving something warm and comforting, but also nourishing. The gentle spices and creamy coconut create the perfect balance - it's like a warm hug in a bowl.",
        hapiAdvice: "Eat this when you feel scattered or need grounding. The warming spices help center your energy while the protein keeps you satisfied.",
        image: '🥥',
        prepTime: 15,
        cookTime: 25,
        servings: 2,
        difficulty: 'Easy',
        category: 'cozy',
        tags: ['cozy', 'protein', 'warming', 'comfort'],
        ingredients: [
          { item: 'Coconut milk (canned)', amount: { cups: '1 can (400ml)', grams: '400g' } },
          { item: 'Chickpeas (cooked)', amount: { cups: '1½ cups', grams: '300g' } },
          { item: 'Yellow onion', amount: { cups: '1 medium', grams: '150g' } }
        ],
        steps: [
          { number: 1, title: 'Prepare mindfully', instruction: 'Heat coconut oil in a large pan over medium heat. Take a moment to breathe in the gentle aroma.' }
        ],
        nutrition: { calories: 285, protein: '12g', carbs: '28g', fiber: '8g', fat: '16g' },
        saves: 342,
        author: adminUser._id
      }
    ];

    await Recipe.insertMany(recipes);

    // Seed Products
    const products = [
      {
        name: 'Coconut Chickpea Stew Kit',
        slug: 'coconut-chickpea-stew-kit',
        description: 'Everything you need for a warming, nourishing meal',
        price: 24.99,
        originalPrice: 29.99,
        category: 'calm-kits',
        label: 'COZY',
        labelColor: 'bg-accent-500',
        image: '🥥',
        tags: ['Plant-Based', 'Ready in 25 mins', 'Serves 2'],
        isNew: false,
        isBestseller: true,
        inventory: 50
      }
    ];

    await Product.insertMany(products);

    // Seed Blog Posts
    const blogPosts = [
      {
        title: 'Why I Romanticize Capybaras',
        slug: 'why-i-romanticize-capybaras',
        excerpt: 'There\'s something deeply calming about these gentle creatures that embodies everything we need in our fast-paced world...',
        content: 'Full blog content here...',
        image: '🌿',
        category: 'Inspiration',
        author: { name: 'Sarah Chen', avatar: '', bio: 'Wellness writer and capybara enthusiast' },
        readTime: '5 min read',
        likes: 234
      }
    ];

    await BlogPost.insertMany(blogPosts);

    // Seed Community Stories
    const communityStories = [
      {
        title: 'How Hapibara helped me quit burnout meals',
        story: 'I used to survive on takeout and energy drinks during busy weeks. Hapibara recipes taught me that nourishing meals could be just as quick and way more satisfying...',
        author: { name: 'Jessica M.', email: 'jessica@example.com', avatar: '👩🏻' },
        tag: 'Wellness Journey',
        preview: 'I used to survive on takeout and energy drinks during busy weeks. Hapibara recipes taught me that nourishing meals could be just as quick...',
        isApproved: true
      }
    ];

    await CommunityStory.insertMany(communityStories);

    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Seeding error:', error);
  }
};

module.exports = seedData;