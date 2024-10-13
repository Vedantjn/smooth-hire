'use client'
import Link from 'next/link'
import { LayoutComponent } from './layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BuildingIcon, UserIcon } from 'lucide-react'

export function AboutPageComponent() {
  return (
    <LayoutComponent>
      <div className="py-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">About SmoothHire</h1>
        <p className="text-xl text-center mb-8 text-gray-600 dark:text-gray-300">
          Revolutionizing the job application process for both applicants and companies.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>At SmoothHire, we are on a mission to simplify and streamline the job application process. We believe that finding the right job or the perfect candidate should not be a hassle. Our platform is designed to connect talented individuals with great opportunities, making the hiring process smooth and efficient for everyone involved.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Create your profile or post a job</li>
                <li>Browse through tailored matches</li>
                <li>Apply with a single click or review applications effortlessly</li>
                <li>Track your progress in real-time</li>
                <li>Connect and communicate seamlessly</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Applicants</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Create a comprehensive profile showcasing your skills and experience</li>
                <li>Receive personalized job recommendations</li>
                <li>Apply to multiple positions with ease</li>
                <li>Track your application status in real-time</li>
                <li>Connect directly with potential employers</li>
              </ul>
            </CardContent>
          
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Post job openings and manage applications efficiently</li>
                <li>Use AI-powered tools to screen and shortlist candidates</li>
                <li>Schedule interviews and communicate with applicants seamlessly</li>
                <li>Access a wide pool of talented individuals</li>
                <li>Streamline your entire recruitment process</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Why Choose SmoothHire?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>User-friendly interface for both applicants and companies</li>
              <li>Advanced matching algorithms to connect the right talent with the right opportunities</li>
              <li>Time-saving features that streamline the application and hiring process</li>
              <li>Transparent communication channels between applicants and employers</li>
              <li>Continuous updates and improvements based on user feedback</li>
              <li>Dedicated customer support to assist you at every step</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="w-full sm:w-auto">
              <UserIcon className="mr-2 h-4 w-4" /> Sign Up as Applicant
            </Button>
            <Button className="w-full sm:w-auto">
              <BuildingIcon className="mr-2 h-4 w-4" /> Sign Up as Company
            </Button>
          </div>
        </div>
      </div>
    </LayoutComponent>
  )
}