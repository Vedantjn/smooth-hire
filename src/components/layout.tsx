'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { Button } from "@/components/ui/button"
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

interface LayoutProps {
  children: ReactNode
}

export function LayoutComponent({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-black shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <BriefcaseIcon className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-2xl font-bold text-white">SmoothHire</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/" className="text-white hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                  About
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="mr-2 text-white border-white hover:bg-gray-300">Log in</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Log in as Applicant</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BuildingIcon className="mr-2 h-4 w-4" />
                    <Link href="/CompanyLogin"><span>Log in as Company</span></Link> 
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="text-black bg-white hover:bg-gray-200">Sign up</Button>
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
                  <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:max-w-none bg-black">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <BriefcaseIcon className="h-8 w-8 text-blue-500" />
                      <span className="ml-2 text-2xl font-bold text-white">SmoothHire</span>
                    </div>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Button>
                    </SheetTrigger>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <Link href="/" className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">
                      Home
                    </Link>
                    <Link href="/about" className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">
                      About
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-white border-white hover:bg-gray-800">
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
                        <Button className="w-full justify-start text-black bg-white hover:bg-gray-200">
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
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="bg-black shadow mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2024 SmoothHire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}