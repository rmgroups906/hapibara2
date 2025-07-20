'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { apiClient } from '@/lib/api'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'

interface TestResult {
  name: string
  status: 'pending' | 'success' | 'error'
  message?: string
  data?: any
}

export default function ApiTest() {
  const [tests, setTests] = useState<TestResult[]>([
    { name: 'Health Check', status: 'pending' },
    { name: 'Get Recipes', status: 'pending' },
    { name: 'Get Products', status: 'pending' },
    { name: 'Get Blog Posts', status: 'pending' },
    { name: 'Get Community Stories', status: 'pending' },
    { name: 'Newsletter Subscription', status: 'pending' },
    { name: 'User Registration', status: 'pending' },
    { name: 'User Login', status: 'pending' }
  ])

  const updateTest = (name: string, status: 'success' | 'error', message?: string, data?: any) => {
    setTests(prev => prev.map(test => 
      test.name === name ? { ...test, status, message, data } : test
    ))
  }

  const runTests = async () => {
    // Reset all tests
    setTests(prev => prev.map(test => ({ ...test, status: 'pending' })))

    try {
      // Test 1: Health Check
      try {
        const response = await fetch('http://localhost:5000/api/health')
        const data = await response.json()
        updateTest('Health Check', 'success', data.message, data)
      } catch (error) {
        updateTest('Health Check', 'error', 'Backend server not running')
      }

      // Test 2: Get Recipes
      try {
        const recipes = await apiClient.getRecipes()
        updateTest('Get Recipes', 'success', `Found ${recipes.recipes?.length || 0} recipes`, recipes)
      } catch (error: any) {
        updateTest('Get Recipes', 'error', error.message)
      }

      // Test 3: Get Products
      try {
        const products = await apiClient.getProducts()
        updateTest('Get Products', 'success', `Found ${products.products?.length || 0} products`, products)
      } catch (error: any) {
        updateTest('Get Products', 'error', error.message)
      }

      // Test 4: Get Blog Posts
      try {
        const posts = await apiClient.getBlogPosts()
        updateTest('Get Blog Posts', 'success', `Found ${posts.posts?.length || 0} posts`, posts)
      } catch (error: any) {
        updateTest('Get Blog Posts', 'error', error.message)
      }

      // Test 5: Get Community Stories
      try {
        const stories = await apiClient.getCommunityStories()
        updateTest('Get Community Stories', 'success', `Found ${stories.stories?.length || 0} stories`, stories)
      } catch (error: any) {
        updateTest('Get Community Stories', 'error', error.message)
      }

      // Test 6: Newsletter Subscription
      try {
        const result = await apiClient.subscribeNewsletter('test@hapibara.com')
        updateTest('Newsletter Subscription', 'success', result.message, result)
      } catch (error: any) {
        updateTest('Newsletter Subscription', 'error', error.message)
      }

      // Test 7: User Registration
      try {
        const testUser = {
          name: 'Test User',
          email: `test${Date.now()}@hapibara.com`,
          password: 'password123'
        }
        const result = await apiClient.register(testUser)
        updateTest('User Registration', 'success', result.message, result)
        
        // Test 8: User Login (using the same credentials)
        try {
          const loginResult = await apiClient.login({
            email: testUser.email,
            password: testUser.password
          })
          updateTest('User Login', 'success', loginResult.message, loginResult)
        } catch (error: any) {
          updateTest('User Login', 'error', error.message)
        }
      } catch (error: any) {
        updateTest('User Registration', 'error', error.message)
        updateTest('User Login', 'error', 'Skipped due to registration failure')
      }

    } catch (error) {
      console.error('Test suite error:', error)
    }
  }

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'pending':
        return <Loader2 className="w-4 h-4 animate-spin text-neutral-500" />
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />
    }
  }

  const getStatusColor = (status: TestResult['status']) => {
    switch (status) {
      case 'pending':
        return 'text-neutral-600'
      case 'success':
        return 'text-green-600'
      case 'error':
        return 'text-red-600'
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>🧪 Hapibara API Test Suite</span>
            <Button onClick={runTests}>
              Run All Tests
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tests.map((test, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="flex-shrink-0 mt-0.5">
                  {getStatusIcon(test.status)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-neutral-800">{test.name}</h3>
                    <span className={`text-sm font-medium ${getStatusColor(test.status)}`}>
                      {test.status.toUpperCase()}
                    </span>
                  </div>
                  {test.message && (
                    <p className={`text-sm mt-1 ${getStatusColor(test.status)}`}>
                      {test.message}
                    </p>
                  )}
                  {test.data && test.status === 'success' && (
                    <details className="mt-2">
                      <summary className="text-xs text-neutral-500 cursor-pointer">
                        View Response Data
                      </summary>
                      <pre className="text-xs bg-neutral-100 p-2 rounded mt-1 overflow-auto max-h-32">
                        {JSON.stringify(test.data, null, 2)}
                      </pre>
                    </details>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-secondary-50 rounded-lg">
            <h4 className="font-medium text-neutral-800 mb-2">📋 Test Instructions:</h4>
            <ol className="text-sm text-neutral-600 space-y-1">
              <li>1. Make sure MongoDB is running on your system</li>
              <li>2. Start the backend server: <code className="bg-white px-1 rounded">cd hapibara-backend && npm run dev</code></li>
              <li>3. The frontend should already be running on localhost:3000</li>
              <li>4. Click "Run All Tests" to verify all API endpoints</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}