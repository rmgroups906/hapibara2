import ApiTest from '@/components/test/api-test'

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-neutral-800 mb-4">
            🧪 API Testing Dashboard
          </h1>
          <p className="text-lg text-neutral-600">
            Test all backend functionalities and API endpoints
          </p>
        </div>
        <ApiTest />
      </div>
    </div>
  )
}