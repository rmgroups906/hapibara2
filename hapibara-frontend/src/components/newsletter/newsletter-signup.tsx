'use client'

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { apiClient } from '@/lib/api';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await apiClient.subscribeNewsletter(email);
      setIsSubscribed(true);
      setEmail('');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="flex items-center justify-center space-x-2 text-primary-600">
        <Check className="w-5 h-5" />
        <span className="font-medium">Welcome to the Chill Club! 🌿</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-primary-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 text-sm"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading}
          size="sm"
        >
          {isLoading ? 'Joining...' : 'Join'}
        </Button>
      </div>
    </form>
  );
}