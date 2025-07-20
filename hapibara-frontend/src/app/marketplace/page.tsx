'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, ShoppingCart, Heart, Star, Leaf, Droplets, Shield, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: 'All Products', icon: '🌿' },
    { id: 'calm-kits', label: 'Calm Kits', icon: '🥣' },
    { id: 'wellness', label: 'Wellness Add-ons', icon: '🧴' },
    { id: 'merch', label: 'Merch', icon: '🧦' },
    { id: 'digital', label: 'Digital', icon: '📥' },
  ]

  const products = [
    {
      id: 1,
      name: 'Coconut Chickpea Stew Kit',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviews: 156,
      category: 'calm-kits',
      label: 'COZY',
      labelColor: 'bg-accent-500',
      image: '🥥',
      description: 'Everything you need for a warming, nourishing meal',
      tags: ['Plant-Based', 'Ready in 25 mins', 'Serves 2'],
      isNew: false,
      isBestseller: true
    },
    {
      id: 2,
      name: 'Morning Energy Ritual Box',
      price: 34.99,
      rating: 4.9,
      reviews: 203,
      category: 'calm-kits',
      label: 'ENERGY',
      labelColor: 'bg-primary-500',
      image: '☕',
      description: 'Gentle morning boost with adaptogens and botanicals',
      tags: ['Adaptogenic', 'Caffeine-free', '30 servings'],
      isNew: true,
      isBestseller: false
    },
    {
      id: 3,
      name: 'Hapi Calm Box',
      price: 42.99,
      rating: 4.7,
      reviews: 89,
      category: 'wellness',
      label: 'CALM',
      labelColor: 'bg-secondary-500',
      image: '🌿',
      description: 'Curated collection for peaceful evenings',
      tags: ['Essential Oils', 'Herbal Tea', 'Meditation Guide'],
      isNew: false,
      isBestseller: false
    },
    {
      id: 4,
      name: 'Gentle Living Journal',
      price: 18.99,
      rating: 4.6,
      reviews: 127,
      category: 'digital',
      label: "HAPI'S PICK",
      labelColor: 'bg-neutral-600',
      image: '📔',
      description: 'Digital templates for mindful daily practices',
      tags: ['PDF Download', '52 Prompts', 'Printable'],
      isNew: false,
      isBestseller: false
    },
    {
      id: 5,
      name: 'Soft Living Tote',
      price: 22.99,
      rating: 4.8,
      reviews: 234,
      category: 'merch',
      label: 'ECO',
      labelColor: 'bg-primary-600',
      image: '👜',
      description: 'Organic cotton tote with Hapi illustration',
      tags: ['100% Organic Cotton', 'Machine Washable', 'Durable'],
      isNew: false,
      isBestseller: true
    },
    {
      id: 6,
      name: 'Plush Hapi Capybara',
      price: 28.99,
      rating: 4.9,
      reviews: 312,
      category: 'merch',
      label: 'CUDDLE',
      labelColor: 'bg-accent-500',
      image: '🧸',
      description: 'Soft companion for gentle moments',
      tags: ['Hypoallergenic', 'Machine Washable', '12 inches'],
      isNew: true,
      isBestseller: true
    }
  ]

  const ethicalValues = [
    { icon: Leaf, label: 'Recyclable', description: 'Sustainable packaging' },
    { icon: Droplets, label: 'No Chemicals', description: 'Clean ingredients' },
    { icon: Shield, label: 'Cruelty-Free', description: 'Never tested on animals' },
    { icon: Award, label: 'Made with Kindness', description: 'Fair trade practices' }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              Buy Soft. Live Soft.
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Mindful products for gentle living. Every item is chosen with care for your wellbeing and our planet.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for mindful products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-colors"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-primary-50 border border-neutral-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ethical Values Bar */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {ethicalValues.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-800 mb-1">
                    {value.label}
                  </h3>
                  <p className="text-xs text-neutral-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-56 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                    <span className="text-6xl">{product.image}</span>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          NEW
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          BESTSELLER
                        </span>
                      )}
                    </div>

                    {/* Label */}
                    <div className="absolute top-3 right-3">
                      <span className={`${product.labelColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                        {product.label}
                      </span>
                    </div>

                    {/* Heart Icon */}
                    <button className="absolute bottom-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                      <Heart className="w-4 h-4 text-neutral-600 hover:text-red-500" />
                    </button>

                    {/* Pricing */}
                    {product.originalPrice && (
                      <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <p className="text-sm text-neutral-600 line-clamp-2">{product.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? 'fill-accent-400 text-accent-400' : 'text-neutral-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-neutral-600 ml-2">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-neutral-800">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-neutral-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/marketplace/${product.id}`}>
                          View
                        </Link>
                      </Button>
                    </div>

                    {/* Subscribe & Save */}
                    {product.category === 'calm-kits' && (
                      <div className="mt-3 p-2 bg-primary-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-primary-700 font-medium">
                            Subscribe & Save 15%
                          </span>
                          <span className="text-xs text-primary-600">
                            ${(product.price * 0.85).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    )}
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
              Load More Products
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Gentle Questions, Gentle Answers
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                question: "Is everything vegan?",
                answer: "Yes! Every product in our marketplace is 100% plant-based and cruelty-free."
              },
              {
                question: "How fast do you ship?",
                answer: "We ship within 1-2 business days. Most orders arrive within 3-5 days with our gentle packaging."
              },
              {
                question: "Can I return products?",
                answer: "Absolutely. We offer 30-day returns for any reason. Your happiness is our priority."
              },
              {
                question: "Do you offer subscriptions?",
                answer: "Yes! Save 15% with our Subscribe & Save option on meal kits and wellness products."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-neutral-800 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}