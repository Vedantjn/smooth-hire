import dynamic from 'next/dynamic'

const ApplicationForm = dynamic(() => import('@/components/ApplicationForm'), { ssr: false })

export default function ApplyPage() {
  const jobId = 'example-job-id' // In a real app, you'd get this from the URL or props

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">EasyApply</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold mb-6">Apply for Job</h2>
            <ApplicationForm jobId={jobId} />
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2024 EasyApply. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}