import dynamic from 'next/dynamic'

const ApplicationForm = dynamic(() => import('@/components/ApplicationForm'), { ssr: false })

export default function ApplyPage() {
  // In a real application, you'd get the jobId from the URL or props
  const jobId = 'example-job-id'

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Apply for Job</h1>
      <ApplicationForm jobId={jobId} />
    </div>
  )
}