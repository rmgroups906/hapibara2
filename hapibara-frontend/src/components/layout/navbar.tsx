'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AuthNav from './auth-nav'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌿</span>
            </div>
            <span className="text-xl font-serif font-bold text-neutral-800">Hapibara</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/recipes" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Recipes
            </Link>
            <Link href="/community" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Community
            </Link>
            <Link href="/marketplace" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Shop
            </Link>
            <Link href="/test" className="text-neutral-700 hover:text-primary-600 transition-colors text-xs">
              🧪 Test
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-neutral-700 hover:text-primary-600 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-neutral-700 hover:text-primary-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <AuthNav />
            <Button size="sm">Join Chill Club</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-neutral-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/recipes"
              className="block text-neutral-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Recipes
            </Link>
            <Link
              href="/community"
              className="block text-neutral-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/marketplace"
              className="block text-neutral-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <div className="pt-4 border-t border-neutral-200 flex items-center space-x-4">
              <AuthNav />
              <Button className="w-full">Join Chill Club</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}