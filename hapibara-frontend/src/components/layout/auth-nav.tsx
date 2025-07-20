'use client'

import { useState } from 'react';
import { User, LogOut, Settings, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthModal from '@/components/auth/auth-modal';
import { useAuth } from '@/hooks/useAuth';

export default function AuthNav() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="w-8 h-8 bg-neutral-200 rounded-full animate-pulse"></div>
    );
  }

  if (!user) {
    return (
      <>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setShowAuthModal(true)}
          className="text-neutral-700 hover:text-primary-600"
        >
          <User className="w-4 h-4 mr-2" />
          Sign In
        </Button>
        
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
      </>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowUserMenu(!showUserMenu)}
        className="flex items-center space-x-2 p-2 rounded-full hover:bg-neutral-100 transition-colors"
      >
        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">
            {user.name.charAt(0).toUpperCase()}
          </span>
        </div>
      </button>

      {showUserMenu && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 py-2 z-50">
          <div className="px-4 py-2 border-b border-neutral-100">
            <p className="font-medium text-neutral-800">{user.name}</p>
            <p className="text-sm text-neutral-500">{user.email}</p>
          </div>
          
          <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 flex items-center space-x-2">
            <Heart className="w-4 h-4" />
            <span>Saved Items</span>
          </button>
          
          <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
          
          <button
            onClick={() => {
              logout();
              setShowUserMenu(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-neutral-50 flex items-center space-x-2 text-red-600"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
}