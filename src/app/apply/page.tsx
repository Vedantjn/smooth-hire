import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ApplicationForm = dynamic(() => import('@/components/ApplicationForm'), { ssr: false })

export default function ApplyPage() {
  const jobId = 'example-job-id' // In a real app, you'd get this from the URL or props

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Link href="/" className="text-2xl font-bold">SmoothHire</Link>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 px-6 text-center">Apply for the Job</h2>
          <div className="px-6 py-8">
            <ApplicationForm jobId={jobId} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}