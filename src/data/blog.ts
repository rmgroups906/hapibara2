import { BlogPost, CommunityStory } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why I Romanticize Capybaras',
    excerpt: 'In a world that demands urgency, capybaras teach us the art of simply being.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Hapi Team',
    date: '2024-01-15',
    readTime: 5,
    category: 'lifestyle'
  },
  {
    id: '2',
    title: 'How I Built a 5-Minute Night Ritual',
    excerpt: 'Small moments of intentionality can transform your evenings from chaotic to calm.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Chen',
    date: '2024-01-10',
    readTime: 7,
    category: 'wellness'
  },
  {
    id: '3',
    title: 'Vegan Parenting in a Non-Vegan World',
    excerpt: 'Navigating plant-based family life with grace, understanding, and lots of patience.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Maya Rodriguez',
    date: '2024-01-05',
    readTime: 8,
    category: 'community'
  }
];

export const communityStories: CommunityStory[] = [
  {
    id: '1',
    title: 'How Hapibara helped me quit burnout meals',
    story: 'I used to survive on takeout and energy drinks. Hapibara taught me that nourishing myself could be simple, gentle, and healing.',
    author: 'Alex Thompson',
    image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-12'
  },
  {
    id: '2',
    title: 'Slow mornings saved my marriage',
    story: 'Starting our days with Hapibara rituals gave us space to connect before the chaos began. Our relationship feels calmer and more intentional.',
    author: 'Jamie & Pat Wilson',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-08'
  }
];