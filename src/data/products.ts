import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Hapi Calm Box',
    description: 'Hanvade with pots Or some hing bags',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'calm-kits',
    label: 'Calm',
    rating: 4.8,
    inStock: true,
    features: ['Chamomile tea blend', 'Lavender sachet', 'Meditation guide', 'Soft journal'],
    hapiNote: 'Use this during foggy afternoons when you need gentle grounding 🌫️'
  },
  {
    id: '2',
    name: 'Morning Ritual Kit',
    description: 'Start your day with intention',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'calm-kits',
    label: 'Energy',
    rating: 4.9,
    inStock: true,
    features: ['Energizing tea blend', 'Morning journal prompts', 'Aromatherapy rollerball'],
    hapiNote: 'Perfect for creating peaceful morning moments ☀️'
  },
  {
    id: '3',
    name: 'Plant Protein Powder',
    description: 'Gentle nutrition for your body',
    price: 45.99,
    image: 'https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'wellness',
    label: "Hapi's Pick",
    rating: 4.7,
    inStock: true,
    features: ['Organic pea protein', 'Adaptogenic herbs', 'Vanilla bean flavor', 'No artificial sweeteners'],
    hapiNote: 'Add to smoothies when you need gentle strength 💪'
  },
  {
    id: '4',
    name: 'Soft Life Journal',
    description: 'Digital download for mindful living',
    price: 12.99,
    image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'digital',
    label: 'Cozy',
    rating: 4.6,
    inStock: true,
    features: ['50 guided prompts', 'Printable PDF', 'Monthly reflection pages', 'Gratitude exercises'],
    hapiNote: 'Use this when you want to slow down and reflect 📝'
  }
];