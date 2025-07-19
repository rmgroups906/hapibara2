import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Coconut Chickpea Stew Kit',
    description: 'A stich from-regan, cats',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    time: 25,
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
    difficulty: 'easy'
  },
  {
    id: '2',
    title: 'Energy Morning Bowl',
    description: 'Start your day with gentle power',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
    time: 10,
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
    tags: ['energy', '5-ingredients', '<15-mins'],
    story: 'Created for those gentle mornings when you want sustained energy without the crash.',
    hapiAdvice: 'Eat this when you want to feel grounded but energized.',
    difficulty: 'easy'
  },
  {
    id: '3',
    title: 'Calm Evening Smoothie',
    description: 'Wind down with nature\'s tranquility',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
    time: 5,
    ingredients: [
      '1 cup cashew milk',
      '1/2 banana',
      '1 cup spinach',
      '1 tbsp almond butter',
      '1 tsp vanilla',
      '1/2 tsp ashwagandha',
      '1 date, pitted',
      'Ice cubes'
    ],
    instructions: [
      'Add all ingredients to blender',
      'Blend until completely smooth',
      'Pour into your favorite glass',
      'Sip slowly and breathe deeply'
    ],
    tags: ['calm', '5-ingredients', '<15-mins'],
    story: 'Perfect for those evenings when you need to transition from day to rest.',
    hapiAdvice: 'Drink this when your mind feels scattered and you need centering.',
    difficulty: 'easy'
  }
];