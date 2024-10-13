'use client'
import Link from 'next/link'
import {LayoutComponent } from './layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BuildingIcon, UserIcon } from 'lucide-react'

export function HomePageComponent() {
  return (
    < LayoutComponent >
      <div className="py-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">Welcome to SmoothHire</h1>
        <p className="text-xl text-center mb-8 text-gray-600 dark:text-gray-300">
          Simplify your job application process with our easy-to-use platform.
        </p>

        <Tabs defaultValue="applicants" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="applicants">For Applicants</TabsTrigger>
            <TabsTrigger value="companies">For Companies</TabsTrigger>
          </TabsList>
          <TabsContent value="applicants">
            <Card>
              <CardHeader>
                <CardTitle>Applicants</CardTitle>
                <CardDescription>Find your dream job with ease</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>SmoothHire simplifies your job search:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create a comprehensive profile</li>
                  <li>Browse and apply to jobs with a single click</li>
                  <li>Track your application status in real-time</li>
                  <li>Receive personalized job recommendations</li>
                </ul>
                <div className="flex justify-center space-x-4 mt-4">
                  <Button>
                    <UserIcon className="mr-2 h-4 w-4" /><Link href="/apply">Sign Up as Applicant</Link>
                  </Button>
                  <Button variant="outline">
                    <UserIcon className="mr-2 h-4 w-4" /> Log In as Applicant
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="companies">
            <Card>
              <CardHeader>
                <CardTitle>Companies</CardTitle>
                <CardDescription>Streamline your recruitment process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>SmoothHire helps you find the best talent:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Post job openings with ease</li>
                  <li>Manage applications efficiently</li>
                  <li>Screen candidates with AI-powered tools</li>
                  <li>Schedule interviews and communicate with applicants</li>
                </ul>
                <div className="flex justify-center space-x-4 mt-4">
                  <Button>
                    <BuildingIcon className="mr-2 h-4 w-4" />
                    <Link href="/CompanyRegistration"> Sign Up as Company</Link>
                  </Button>
                  <Button variant="outline">
                    <BuildingIcon className="mr-2 h-4 w-4" />
                    <Link href="/CompanyLogin"> Log In as Company</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Create Profile</CardTitle>
              </CardHeader>
              <CardContent>
                Sign up and build your comprehensive profile or post job openings.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Connect</CardTitle>
              </CardHeader>
              <CardContent>
                Browse jobs or candidates, and connect with potential matches.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                Communicate, schedule interviews, and make hiring decisions seamlessly.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LayoutComponent>
  )
}