import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts, communityStories } from '../data/blog';
import { BlogPost } from '../types';

const Community: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'lifestyle': return 'bg-purple-100 text-purple-800';
      case 'food': return 'bg-green-100 text-green-800';
      case 'wellness': return 'bg-blue-100 text-blue-800';
      case 'community': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-6 text-green-600 hover:text-green-700 font-medium"
          >
            ← Back to Community
          </button>
          
          <article className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedPost.category)}`}>
                  {selectedPost.category}
                </span>
                <div className="flex items-center space-x-1 text-gray-500 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(selectedPost.date)}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime} min read</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{selectedPost.excerpt}</p>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {selectedPost.content}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This is where the full article content would go. In a real implementation, 
                  this would be markdown or rich text content from your CMS. The content would 
                  include proper formatting, images, and all the beautiful writing that makes 
                  the Hapibara blog special.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">By {selectedPost.author}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Chill Journal & Humans of Hapibara</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Educate, inspire, and build community around plant-based lifestyle & soft living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Chill Journal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                      <ArrowRight className="h-4 w-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Humans of Hapibara</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {communityStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-green-700">— {story.author}</span>
                    <span className="text-sm text-gray-500">{formatDate(story.date)}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Share Your Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join the Chill Club */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to chill with us?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the Chill Club for weekly recipes, wellness tips, and gentle reminders to slow down.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Join
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;