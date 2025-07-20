import Link from 'next/link'
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react'
import NewsletterSignup from '@/components/newsletter/newsletter-signup'

export default function Footer() {
  return (
    <footer className="bg-secondary-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌿</span>
              </div>
              <span className="text-xl font-serif font-bold text-neutral-800">Hapibara</span>
            </div>
            <p className="text-neutral-600 text-sm mb-4">
              Soft food. Slower days. Sustainable choices.
            </p>
            <p className="text-xs text-neutral-500">
              Built by Hapi. Approved by plants. 🌱
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-neutral-800 mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/recipes" className="text-neutral-600 hover:text-primary-600 transition-colors">Recipes</Link></li>
              <li><Link href="/community" className="text-neutral-600 hover:text-primary-600 transition-colors">Community</Link></li>
              <li><Link href="/marketplace" className="text-neutral-600 hover:text-primary-600 transition-colors">Shop</Link></li>
              <li><Link href="/about" className="text-neutral-600 hover:text-primary-600 transition-colors">Meet Hapi</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-neutral-800 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-neutral-600 hover:text-primary-600 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-neutral-600 hover:text-primary-600 transition-colors">Contact</Link></li>
              <li><Link href="/shipping" className="text-neutral-600 hover:text-primary-600 transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="text-neutral-600 hover:text-primary-600 transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-neutral-800 mb-4">Join the Chill Club</h3>
            <div className="mb-4">
              <NewsletterSignup />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-8 text-center">
          <p className="text-xs text-neutral-500">
            © 2024 Hapibara. All rights reserved. Made with 🤍 for gentle living.
          </p>
        </div>
      </div>
    </footer>
  )
}