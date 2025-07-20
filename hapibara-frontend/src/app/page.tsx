'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Heart, Users, Leaf, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="bg-gradient-to-b from-secondary-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-800 mb-6 leading-tight">
                The Hapibara Way
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-lg">
                Hapibara is a lifestyle brand for gentle living — plant-based food, cozy rituals, and mindful moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/recipes">
                    Explore Recipes
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/community">Read Our Journal</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 lg:p-12">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🌿</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <p className="text-lg font-medium text-neutral-700 mb-2">
                      "Hi, I'm Hapi."
                    </p>
                    <p className="text-sm text-neutral-600">
                      I like naps, snacks and long planty baths.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-4">
              The Hapibara Way
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                I - Plant-Based Eating
              </h3>
              <p className="text-neutral-600">
                Comfort food made kind.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary-100 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                II - Soft Living
              </h3>
              <p className="text-neutral-600">
                Daily rituals, slow mornings, chill evenings.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent-100 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                III - Eco-Conscious Choices
              </h3>
              <p className="text-neutral-600">
                Minimal packaging. Local ingredients. Thoughtful products.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Recipe Preview */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Crafted for Calm
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Simple recipes for nourishing your body and soothing your soul
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                  <span className="text-4xl">🥥</span>
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      COZY
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Coconut Chickpea Stew Kit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-sm mb-4">
                    Astich from-regan, cats
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Add To Gurn
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-4xl">☕</span>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      ENERGY
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>What it Means to Eat Soft</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-sm mb-4">
                    Add in meats 37 lmohs
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Add a Snade
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                  <span className="text-4xl">🌿</span>
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      CALM
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Hapi Calm Box</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-sm mb-4">
                    Harvade with pots Or some hing begs
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild>
              <Link href="/recipes">
                View All Recipes
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Meet Hapi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 lg:p-12">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🌿</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-6">
                Meet Hapi
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                I like naps, snacks and long planty baths.
              </p>
              <p className="text-neutral-600 mb-8">
                Our gentle capybara mascot embodies everything we stand for - taking life slowly, 
                finding joy in simple pleasures, and creating space for mindful moments.
              </p>
              <Button variant="outline" size="lg">
                Learn Hapi's Story
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Chill Club Love
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Stories from our gentle community
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                text: "Hapibara helped me slow down and actually enjoy cooking again. The recipes are so gentle and nourishing.",
                author: "Sarah M.",
                rating: 5
              },
              {
                text: "I love the community here. Everyone is so supportive and the recipes are always a hit with my family.",
                author: "Marcus L.",
                rating: 5
              },
              {
                text: "The Calm Box changed my evening routine completely. Such thoughtful products for mindful living.",
                author: "Elena R.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                      ))}
                    </div>
                    <p className="text-neutral-600 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="text-sm font-medium text-neutral-800">
                      {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
              Ready to live the Hapibara way?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Join our Chill Club for gentle recipes, mindful products, and a community 
              that celebrates slow living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Join Chill Club
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/marketplace">Shop Mindfully</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}