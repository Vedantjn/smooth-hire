import dynamic from 'next/dynamic'
import Link from 'next/link'
import { LayoutComponent } from '@/components/layout'

const ApplicationForm = dynamic(() => import('@/components/ApplicationForm'), { ssr: false })

export default function ApplyPage() {
  const jobId = 'example-job-id' // In a real app, you'd get this from the URL or props

  return (
    <LayoutComponent>
      <div className="min-h-screen bg-white">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold mb-6">Apply for Job</h2>
              <ApplicationForm jobId={jobId} />
            </div>
          </div>
        </main>
      </div>
    </LayoutComponent>
  )
}