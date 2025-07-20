'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Users, Heart, Share2, Bookmark, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  const [isSaved, setIsSaved] = useState(false)
  const [unitType, setUnitType] = useState<'grams' | 'cups'>('cups')

  // Mock recipe data - in real app, fetch based on params.id
  const recipe = {
    id: 1,
    title: 'Coconut Chickpea Curry Bowl',
    image: '🥥',
    time: '25 mins',
    servings: 2,
    difficulty: 'Easy',
    category: 'cozy',
    description: 'Warming spices meet creamy coconut in this nourishing bowl that soothes both body and soul.',
    story: "This recipe came to me during a particularly stressful week. I was craving something warm and comforting, but also nourishing. The gentle spices and creamy coconut create the perfect balance - it's like a warm hug in a bowl.",
    hapiAdvice: "Eat this when you feel scattered or need grounding. The warming spices help center your energy while the protein keeps you satisfied.",
    ingredients: [
      { item: 'Coconut milk (canned)', amount: { cups: '1 can (400ml)', grams: '400g' } },
      { item: 'Chickpeas (cooked)', amount: { cups: '1½ cups', grams: '300g' } },
      { item: 'Yellow onion', amount: { cups: '1 medium', grams: '150g' } },
      { item: 'Garlic cloves', amount: { cups: '3 cloves', grams: '10g' } },
      { item: 'Fresh ginger', amount: { cups: '1 tsp grated', grams: '5g' } },
      { item: 'Curry powder', amount: { cups: '2 tsp', grams: '4g' } },
      { item: 'Turmeric', amount: { cups: '1 tsp', grams: '2g' } },
      { item: 'Spinach (fresh)', amount: { cups: '2 cups', grams: '60g' } },
      { item: 'Coconut oil', amount: { cups: '1 tbsp', grams: '15g' } },
      { item: 'Sea salt', amount: { cups: 'to taste', grams: 'to taste' } }
    ],
    steps: [
      {
        number: 1,
        title: 'Prepare mindfully',
        instruction: 'Heat coconut oil in a large pan over medium heat. Take a moment to breathe in the gentle aroma.'
      },
      {
        number: 2,
        title: 'Build the base',
        instruction: 'Add diced onion and cook slowly until soft and golden, about 5 minutes. Add garlic and ginger, cooking until fragrant.'
      },
      {
        number: 3,
        title: 'Add warmth',
        instruction: 'Stir in curry powder and turmeric, letting the spices bloom for 30 seconds. Notice how the kitchen fills with comforting scents.'
      },
      {
        number: 4,
        title: 'Create creaminess',
        instruction: 'Pour in coconut milk and add chickpeas. Simmer gently for 10 minutes, stirring occasionally with care.'
      },
      {
        number: 5,
        title: 'Finish with greens',
        instruction: 'Add spinach and let it wilt into the curry. Season with salt and taste mindfully, adjusting as needed.'
      },
      {
        number: 6,
        title: 'Serve with intention',
        instruction: 'Ladle into bowls and garnish as desired. Eat slowly, savoring each warming spoonful.'
      }
    ],
    nutrition: {
      calories: 285,
      protein: '12g',
      carbs: '28g',
      fiber: '8g',
      fat: '16g'
    },
    tags: ['cozy', 'protein', 'warming', 'comfort']
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button variant="ghost" asChild>
          <Link href="/recipes" className="inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Recipes
          </Link>
        </Button>
      </div>

      {/* Recipe Header */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="relative mb-8">
              <div className={`w-32 h-32 mx-auto rounded-3xl flex items-center justify-center text-6xl bg-gradient-to-br ${
                recipe.category === 'cozy' ? 'from-accent-100 to-accent-200' :
                recipe.category === 'energy' ? 'from-primary-100 to-primary-200' :
                'from-secondary-100 to-secondary-200'
              }`}>
                {recipe.image}
              </div>
              <div className="absolute top-2 right-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                  recipe.category === 'cozy' ? 'bg-accent-500' :
                  recipe.category === 'energy' ? 'bg-primary-500' :
                  'bg-secondary-500'
                }`}>
                  {recipe.category.toUpperCase()}
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-4">
              {recipe.title}
            </h1>
            
            <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
              {recipe.description}
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-neutral-600 mb-6">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {recipe.time}
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {recipe.servings} servings
              </span>
              <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                {recipe.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <Button
                variant={isSaved ? "default" : "outline"}
                onClick={() => setIsSaved(!isSaved)}
              >
                <Bookmark className="w-4 h-4 mr-2" />
                {isSaved ? 'Saved' : 'Save Recipe'}
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Shopping List
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recipe Story */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-neutral-800 mb-3">
                  Where this dish came from
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  {recipe.story}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-3 flex items-center">
                  <span className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center text-sm mr-2">
                    🌿
                  </span>
                  Hapi's Advice
                </h3>
                <p className="text-primary-700 italic">
                  {recipe.hapiAdvice}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Ingredients & Instructions */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-neutral-800">
                      Ingredients
                    </h2>
                    <div className="flex bg-neutral-100 rounded-full p-1">
                      <button
                        onClick={() => setUnitType('cups')}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          unitType === 'cups' ? 'bg-white text-neutral-800 shadow' : 'text-neutral-600'
                        }`}
                      >
                        Cups
                      </button>
                      <button
                        onClick={() => setUnitType('grams')}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          unitType === 'grams' ? 'bg-white text-neutral-800 shadow' : 'text-neutral-600'
                        }`}
                      >
                        Grams
                      </button>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-b-0">
                        <span className="text-neutral-700">{ingredient.item}</span>
                        <span className="text-neutral-600 font-medium">
                          {ingredient.amount[unitType]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-neutral-800 mb-4">
                    Calm Steps
                  </h2>
                  
                  <div className="space-y-4">
                    {recipe.steps.map((step) => (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: step.number * 0.1 }}
                        className="flex space-x-4"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-800 mb-1">
                            {step.title}
                          </h3>
                          <p className="text-neutral-600 leading-relaxed">
                            {step.instruction}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nutrition & Tags */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Nutrition */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                  Nutrition per serving
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{recipe.nutrition.calories}</div>
                    <div className="text-xs text-neutral-500">calories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-neutral-700">{recipe.nutrition.protein}</div>
                    <div className="text-xs text-neutral-500">protein</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-neutral-700">{recipe.nutrition.carbs}</div>
                    <div className="text-xs text-neutral-500">carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-neutral-700">{recipe.nutrition.fiber}</div>
                    <div className="text-xs text-neutral-500">fiber</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                  Recipe vibes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}