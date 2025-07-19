import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import RecipeCard from '../components/RecipeCard';
import ProductCard from '../components/ProductCard';
import { recipes } from '../data/recipes';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';

const Homepage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Hapibara Way
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Hapibara is a lifestyle brand for gentle living — plant-based food, cozy rituals, and mindful moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/recipes"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  Explore Recipes
                </Link>
                <Link
                  to="/community"
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  Read Our Journal
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-green-100 rounded-full p-8 relative">
                <div className="text-center">
                  <div className="text-8xl mb-4">🦌</div>
                  <div className="bg-white rounded-lg p-4 inline-block shadow-sm">
                    <span className="text-green-700 font-medium">Hi, I'm Hapi! ☕</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-green-600 opacity-60">🌿</div>
                <div className="absolute bottom-8 left-4 text-green-600 opacity-60">🍃</div>
                <div className="absolute top-12 left-8 text-green-600 opacity-60">🌱</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Hapibara Way</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-sm text-gray-500 mb-2">I</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Plant-Based Eating</h3>
              <p className="text-gray-600">Comfort food made kind.</p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-sm text-gray-500 mb-2">II</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Soft Living</h3>
              <p className="text-gray-600">Daily rituals, slow mornings, chill evenings.</p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-sm text-gray-500 mb-2">III</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Conscious Choices</h3>
              <p className="text-gray-600">Minimal packaging. Local ingredients. Thoughtful products.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recipe Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Crafted for Calm</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple recipes that nourish your body and soothe your soul.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {recipes.slice(0, 3).map((recipe, index) => (
              <motion.div
                key={recipe.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <RecipeCard recipe={recipe} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/recipes"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              View All Recipes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Hapi Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="text-center lg:text-left">
                <div className="text-6xl mb-4">🦌</div>
                <div className="bg-white rounded-lg p-6 shadow-sm inline-block">
                  <p className="text-green-700 font-medium mb-2">Hi, I'm Hapi.</p>
                  <p className="text-gray-600">I like naps, snacks and long planty baths.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Hapi</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I like naps, snacks and long planty baths. I'm here to remind you that life doesn't have to be 
                complicated. Sometimes the most profound moments happen over a simple bowl of food, 
                shared with people you love.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🌱 Loves: Slow mornings, warm bowls, gentle stretches</p>
                <p>🧘 Philosophy: Less rush, more presence</p>
                <p>🍃 Mission: Making wellness feel accessible and joyful</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Chill Club Love</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop the Soft Life</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thoughtfully curated products to support your gentle living journey.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {products.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/marketplace"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              Browse All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;