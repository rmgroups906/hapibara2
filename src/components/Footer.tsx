import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">Hapibara</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Soft food. Slower days. Sustainable choices. Living the capybara way.
            </p>
            <p className="text-sm text-green-700 font-medium">
              Built by Hapi. Approved by plants. 🌱
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/recipes" className="text-gray-600 hover:text-green-600 transition-colors">Recipes</Link></li>
              <li><Link to="/community" className="text-gray-600 hover:text-green-600 transition-colors">Journal</Link></li>
              <li><Link to="/marketplace" className="text-gray-600 hover:text-green-600 transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Join the Chill Club</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-green-600 text-white rounded-r-md text-sm hover:bg-green-700 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Hapibara. All rights reserved. Made with love and plant power.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;