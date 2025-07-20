'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Calendar, User, BookOpen, Coffee, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function CommunityPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Why I Romanticize Capybaras',
      excerpt: 'There's something deeply calming about these gentle creatures that embodies everything we need in our fast-paced world...',
      author: 'Sarah Chen',
      date: '3 days ago',
      readTime: '5 min read',
      category: 'Inspiration',
      image: '🌿',
      likes: 234,
      comments: 18
    },
    {
      id: 2,
      title: 'How I Built a 5-Minute Night Ritual',
      excerpt: 'Simple practices that transformed my evenings from chaotic to peaceful, one gentle step at a time...',
      author: 'Marcus Rivera',
      date: '1 week ago',
      readTime: '7 min read',
      category: 'Rituals',
      image: '🕯️',
      likes: 456,
      comments: 32
    },
    {
      id: 3,
      title: 'Vegan Parenting in a Non-Vegan World',
      excerpt: 'Navigating family dinners and school lunches while staying true to our plant-based values...',
      author: 'Elena Rodriguez',
      date: '2 weeks ago',
      readTime: '12 min read',
      category: 'Family',
      image: '🥬',
      likes: 189,
      comments: 45
    },
    {
      id: 4,
      title: 'The Art of Slow Mornings',
      excerpt: 'How shifting from rushed to mindful mornings changed everything about my daily energy...',
      author: 'David Kim',
      date: '3 weeks ago',
      readTime: '6 min read',
      category: 'Lifestyle',
      image: '☕',
      likes: 567,
      comments: 28
    }
  ]

  const communityStories = [
    {
      id: 1,
      story: 'How Hapibara helped me quit burnout meals',
      author: 'Jessica M.',
      avatar: '👩🏻',
      preview: 'I used to survive on takeout and energy drinks during busy weeks. Hapibara recipes taught me that nourishing meals could be just as quick...',
      tag: 'Wellness Journey'
    },
    {
      id: 2,
      story: 'Slow mornings saved my marriage',
      author: 'Michael & Ana',
      avatar: '👫',
      preview: 'We were ships passing in the night until we started doing morning rituals together. Now we actually connect before the day begins...',
      tag: 'Relationships'
    },
    {
      id: 3,
      story: 'From anxiety to calm with plant-based eating',
      author: 'Riley Chen',
      avatar: '👨🏻',
      preview: 'I never connected my diet to my mental health until I tried the Hapibara way. The difference in my anxiety levels is remarkable...',
      tag: 'Mental Health'
    }
  ]

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
              Chill Journal & Community
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Stories, insights, and inspiration from our gentle community of plant-based living enthusiasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Blog Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-serif font-bold text-neutral-800">
                    Latest from the Chill Journal
                  </h2>
                  <Button variant="outline" size="sm">
                    View All Posts
                  </Button>
                </div>
              </motion.div>

              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-1 h-48 md:h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                          <span className="text-4xl">{post.image}</span>
                        </div>
                        <div className="md:col-span-2">
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                                {post.category}
                              </span>
                              <div className="flex items-center text-xs text-neutral-500 space-x-4">
                                <span className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {post.date}
                                </span>
                                <span className="flex items-center">
                                  <BookOpen className="w-3 h-3 mr-1" />
                                  {post.readTime}
                                </span>
                              </div>
                            </div>
                            <CardTitle className="text-xl hover:text-primary-600 transition-colors">
                              <Link href={`/community/blog/${post.id}`}>
                                {post.title}
                              </Link>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-neutral-600 mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-sm text-neutral-500">
                                <User className="w-4 h-4 mr-1" />
                                {post.author}
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-neutral-500">
                                <span className="flex items-center">
                                  <Heart className="w-4 h-4 mr-1" />
                                  {post.likes}
                                </span>
                                <span className="flex items-center">
                                  <MessageCircle className="w-4 h-4 mr-1" />
                                  {post.comments}
                                </span>
                                <button className="flex items-center hover:text-primary-600 transition-colors">
                                  <Share2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Join Chill Club */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200 mb-8">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary-200 rounded-full flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">
                      Join the Chill Club
                    </h3>
                    <p className="text-sm text-primary-700 mb-4">
                      Get gentle updates, exclusive recipes, and mindful moments delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 rounded-lg border border-primary-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 text-sm"
                      />
                      <Button size="sm" className="w-full">
                        Ready to chill with us?
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Popular Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-lg">Popular Topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {['Wellness Journey', 'Slow Living', 'Plant-Based', 'Mindful Eating', 'Daily Rituals', 'Mental Health'].map((topic) => (
                        <button
                          key={topic}
                          className="block w-full text-left px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Humans of Hapibara
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real stories from our community about gentle living and mindful choices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">{story.avatar}</span>
                      </div>
                      <div>
                        <div className="font-medium text-neutral-800">{story.author}</div>
                        <div className="text-xs text-neutral-500">{story.tag}</div>
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      {story.story}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 line-clamp-4 mb-4">
                      {story.preview}
                    </p>
                    <Button variant="outline" size="sm">
                      Read Full Story
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                Share Your Story
              </h3>
              <p className="text-neutral-600 mb-6">
                How has gentle living changed your life? We'd love to hear your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Submit Your Story</Button>
                <Button variant="outline">Record Voice Story</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}