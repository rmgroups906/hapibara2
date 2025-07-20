'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Clock, Heart, Users, ChefHat } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const filters = [
    { id: 'quick', label: '<15 mins', icon: Clock },
    { id: 'simple', label: '5 Ingredients', icon: ChefHat },
    { id: 'cozy', label: 'Cozy', icon: Heart },
    { id: 'energy', label: 'Energy Boost', icon: Users },
  ]

  const recipes = [
    {
      id: 1,
      title: 'Coconut Chickpea Curry Bowl',
      image: '🥥',
      time: '25 mins',
      difficulty: 'Easy',
      tags: ['cozy', 'protein'],
      description: 'Warming spices meet creamy coconut in this nourishing bowl',
      saves: 342,
      category: 'cozy'
    },
    {
      id: 2,
      title: 'Morning Energy Smoothie',
      image: '🥤',
      time: '5 mins',
      difficulty: 'Super Easy',
      tags: ['quick', 'energy'],
      description: 'Gentle energy boost with adaptogens and fresh fruit',
      saves: 567,
      category: 'energy'
    },
    {
      id: 3,
      title: 'Calm Evening Poke Bowl',
      image: '🥗',
      time: '15 mins',
      difficulty: 'Easy',
      tags: ['quick', 'fresh'],
      description: 'Light and refreshing bowl perfect for peaceful evenings',
      saves: 423,
      category: 'calm'
    },
    {
      id: 4,
      title: 'Healing Turmeric Latte',
      image: '☕',
      time: '8 mins',
      difficulty: 'Easy',
      tags: ['warm', 'healing'],
      description: 'Golden milk blend for soothing body and mind',
      saves: 289,
      category: 'calm'
    },
    {
      id: 5,
      title: 'Zen Garden Salad',
      image: '🥬',
      time: '12 mins',
      difficulty: 'Easy',
      tags: ['fresh', 'simple'],
      description: 'Mindful mix of greens, herbs, and gentle dressing',
      saves: 234,
      category: 'fresh'
    },
    {
      id: 6,
      title: 'Cozy Lentil Stew',
      image: '🍲',
      time: '35 mins',
      difficulty: 'Medium',
      tags: ['cozy', 'protein'],
      description: 'Slow-simmered comfort in a warming bowl',
      saves: 445,
      category: 'cozy'
    }
  ]

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    )
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-800 mb-6">
              Comfort in a Bowl
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Gentle recipes for nourishing moments. No stress, no perfection - just delicious, mindful eating.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for gentle recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-colors"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((filter) => {
                const Icon = filter.icon
                const isSelected = selectedFilters.includes(filter.id)
                return (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(filter.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isSelected
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-neutral-700 hover:bg-primary-50 border border-neutral-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{filter.label}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {recipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`relative h-48 flex items-center justify-center text-6xl bg-gradient-to-br ${
                    recipe.category === 'cozy' ? 'from-accent-100 to-accent-200' :
                    recipe.category === 'energy' ? 'from-primary-100 to-primary-200' :
                    recipe.category === 'calm' ? 'from-secondary-100 to-secondary-200' :
                    'from-neutral-100 to-neutral-200'
                  }`}>
                    {recipe.image}
                    <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-neutral-600 hover:text-red-500" />
                    </button>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        recipe.category === 'cozy' ? 'bg-accent-500' :
                        recipe.category === 'energy' ? 'bg-primary-500' :
                        recipe.category === 'calm' ? 'bg-secondary-500' :
                        'bg-neutral-500'
                      }`}>
                        {recipe.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{recipe.title}</CardTitle>
                    <p className="text-sm text-neutral-600 line-clamp-2">{recipe.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {recipe.time}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {recipe.saves}
                      </span>
                    </div>
                    
                    <div className="flex gap-2 mb-4">
                      {recipe.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={`/recipes/${recipe.id}`}>
                        View Recipe
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline">
              Load More Gentle Recipes
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Suggest Recipe */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-6">
              Share Your Calm Bowl Idea
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Have a gentle recipe that brings you peace? We'd love to feature it in our collection.
            </p>
            <Button size="lg">
              Submit Your Recipe
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}