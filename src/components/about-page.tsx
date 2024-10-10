'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BriefcaseIcon, BuildingIcon, MenuIcon, UserIcon, XIcon } from 'lucide-react'

export function AboutPageComponent() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-black dark:bg-gray-800 shadow">
        <nav className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <BriefcaseIcon className="h-8 w-8 text-white" />
                <span className="ml-2 text-2xl font-bold text-white dark:text-white">SmoothHire</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/" className="border-transparent text-white dark:text-gray-300 hover:border-gray-300  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="border-blue-500 text-white dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="mr-2 text-white">Log in</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Log in as Applicant</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BuildingIcon className="mr-2 h-4 w-4" />
                    <Link href="/CompanyLogIn"><span>Log in as Company</span></Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="mr-2 text-white">Sign up</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <UserIcon className="mr-2 h-4 w-4" />
                    <Link href="/apply"><span>Sign up as Applicant</span></Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BuildingIcon className="mr-2 h-4 w-4" />
                    <Link href="/CompanyRegistration"><span>Sign up as Company</span></Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:max-w-none">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BriefcaseIcon className="h-8 w-8 text-blue-500" />
                      <span className="ml-2 text-2xl font-bold">SmoothHire</span>
                    </div>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Button>
                    </SheetTrigger>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="space-y-2">
                      <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-white">
                        Home
                      </Link>
                      <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-white">
                        About
                      </Link>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <UserIcon className="mr-2 h-4 w-4" />
                            Log in
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <UserIcon className="mr-2 h-4 w-4" />
                            <span>Log in as Applicant</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BuildingIcon className="mr-2 h-4 w-4" />
                            <span>Log in as Company</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="w-full justify-start">
                            <UserIcon className="mr-2 h-4 w-4" />
                            Sign up
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <UserIcon className="mr-2 h-4 w-4" />
                            <span>Sign up as Applicant</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BuildingIcon className="mr-2 h-4 w-4" />
                            <span>Sign up as Company</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
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
                <p>At SmoothHire, we are on a mission to simplify and streamline the job application process. We believe that finding the right job or the perfect candidate shouldn not be a hassle. Our platform is designed to connect talented individuals with great opportunities, making the hiring process smooth and efficient for everyone involved.</p>
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
            <div className="flex justify-center space-x-4">
              <Button>
              <Link href="apply"><UserIcon className="mr-2 h-4 w-4" /> Sign Up as Applicant</Link>
              </Button>
              <Button>
              <Link href="CompanyRegistration"><BuildingIcon className="mr-2 h-4 w-4" /> Sign Up as Company</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black dark:bg-gray-800 shadow mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white dark:text-gray-300">
            © 2024 SmoothHire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}