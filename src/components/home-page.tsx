'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

export function HomePageComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                <Link href="/" className="border-blue-500 text-white dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="border-transparent text-white dark:text-gray-300 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
                    <UserIcon className="mr-2 h-4 w-4 " />
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
                <SheetContent side="right" className="w-[300px] sm:max-w-none bg-white">
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
                            <Link href="/CompanyLogIn"><span>Log in as Company</span></Link>
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
                            <Link href="/apply"><span>Sign up as Applicant</span></Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BuildingIcon className="mr-2 h-4 w-4" />
                            <Link href="/CompanyRegistration"><span>Sign up as Company</span></Link>
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
                      <UserIcon className="mr-2 h-4 w-4" /> <Link href="/apply"><span>Sign up as Applicant</span></Link>
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
                      <BuildingIcon className="mr-2 h-4 w-4" /><Link href="/apply"><span>Sign up as Applicant</span></Link>
                    </Button>
                    <Button variant="outline">
                      <BuildingIcon className="mr-2 h-4 w-4" /><Link href="/CompanyLogIn"><span>Log in as Company</span></Link>
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