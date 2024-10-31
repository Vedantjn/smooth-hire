"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, Pencil, Trash2, Users, FileText, Clock, BriefcaseIcon, MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Types
type JobPosting = {
  id: number
  title: string
  description: string
  requirements: string
  status: 'open' | 'closed'
}

type Applicant = {
  id: number
  name: string
  email: string
  status: 'applied' | 'reviewing' | 'interviewed' | 'offered' | 'rejected'
  resume: string
  applicationLetter: string
  applicationTime: string
}

// Mock data
const initialJobs: JobPosting[] = [
  { id: 1, title: 'Software Engineer', description: 'We are looking for a talented software engineer to join our team and help build innovative solutions.', requirements: 'Bachelor\'s degree in Computer Science, 3+ years of experience in web development, proficiency in React and Node.js.', status: 'open' },
  { id: 2, title: 'Product Manager', description: 'Seeking an experienced product manager to lead our product development efforts and drive growth.', requirements: '5+ years of experience in product management, strong analytical skills, excellent communication abilities.', status: 'open' },
]

const mockApplicants: Record<number, Applicant[]> = {
  1: [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'applied', resume: 'Experienced software engineer with a focus on web technologies...', applicationLetter: 'Dear Hiring Manager, I am excited to apply for the Software Engineer position...', applicationTime: '2023-05-15T10:30:00Z' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'reviewing', resume: 'Full-stack developer with 5 years of experience in building scalable applications...', applicationLetter: 'To Whom It May Concern, I believe my skills and experience make me an ideal candidate...', applicationTime: '2023-05-16T14:45:00Z' },
  ],
  2: [
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'interviewed', resume: 'Product manager with a track record of launching successful products...', applicationLetter: 'Hello, I am thrilled to apply for the Product Manager role at your company...', applicationTime: '2023-05-14T09:15:00Z' },
  ],
}

export function JobManagementComponent() {
  const [jobs, setJobs] = useState<JobPosting[]>(initialJobs)
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null)
  const [isJobFormOpen, setIsJobFormOpen] = useState(false)
  const [isApplicantListOpen, setIsApplicantListOpen] = useState(false)
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null)

  const handleCreateOrUpdateJob = (job: Omit<JobPosting, 'id'> & { id?: number }) => {
    if (job.id) {
      setJobs(jobs.map(j => j.id === job.id ? job as JobPosting : j))
    } else {
      setJobs([...jobs, { ...job, id: Math.max(...jobs.map(j => j.id), 0) + 1 }])
    }
    setEditingJob(null)
    setIsJobFormOpen(false)
  }

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter(job => job.id !== id))
  }

  const handleToggleJobStatus = (id: number) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: job.status === 'open' ? 'closed' : 'open' } : job))
  }

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
                <Link href="/JobManagement" className="border-blue-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Job Management
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="ml-2 text-white">John Doe</span>
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
                    <Link href="/job-management" className="bg-gray-800 text-white px-3 py-2 rounded-md text-base font-medium">
                      Job Management
                    </Link>
                    <div className="flex items-center px-3 py-2">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span className="ml-2 text-white">John Doe</span>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4  py-6 sm:px-0">
          <Card className="bg-white dark:bg-gray-800 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">Job Listings</CardTitle>
              <Dialog open={isJobFormOpen} onOpenChange={setIsJobFormOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => { setEditingJob(null); setIsJobFormOpen(true); }}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Job
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800">
                  <DialogHeader>
                    <DialogTitle>{editingJob ? 'Edit Job' : 'Add New Job'}</DialogTitle>
                  </DialogHeader>
                  <JobForm 
                    job={editingJob} 
                    onSubmit={handleCreateOrUpdateJob}
                    onCancel={() => { setEditingJob(null); setIsJobFormOpen(false); }} 
                  />
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader >
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map(job => (
                    <TableRow key={job.id}>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger className="font-medium hover:underline">
                            {job.title}
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800">
                            <DialogHeader>
                              <DialogTitle>{job.title}</DialogTitle>
                            </DialogHeader>
                            <div className="mt-4">
                              <h4 className="font-semibold mb-2">Job Description:</h4>
                              <p>{job.description}</p>
                              <h4 className="font-semibold mt-4 mb-2">Requirements:</h4>
                              <p>{job.requirements}</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${job.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {job.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => setEditingJob(job)}>
                                <Pencil className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800">
                              <DialogHeader>
                                <DialogTitle>Edit Job</DialogTitle>
                              </DialogHeader>
                              <JobForm 
                                job={job} 
                                onSubmit={handleCreateOrUpdateJob}
                                onCancel={() => { setEditingJob(null); setIsJobFormOpen(false); }} 
                              />
                            </DialogContent>
                          </Dialog>
                          <Button variant="outline" size="sm" onClick={() => handleDeleteJob(job.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleToggleJobStatus(job.id)}>
                            {job.status === 'open' ? 'Close' : 'Open'}
                          </Button>
                          <Dialog open={isApplicantListOpen && selectedJobId === job.id} onOpenChange={(open) => {
                            setIsApplicantListOpen(open)
                            if (!open) setSelectedJobId(null)
                          }}>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => setSelectedJobId(job.id)}>
                                <Users className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[768px] bg-white dark:bg-gray-800">
                              <DialogHeader>
                                <DialogTitle>Applicants for {job.title}</DialogTitle>
                              </DialogHeader>
                              <ApplicantList jobId={job.id} />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center">&copy; 2024  SmoothHire. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function JobForm({ job, onSubmit, onCancel }: { job: JobPosting | null, onSubmit: (job: Omit<JobPosting, 'id'> & { id?: number }) => void, onCancel: () => void }) {
  const [title, setTitle] = useState(job?.title || '')
  const [description, setDescription] = useState(job?.description || '')
  const [requirements, setRequirements] = useState(job?.requirements || '')

  useEffect(() => {
    if (job) {
      setTitle(job.title)
      setDescription(job.description)
      setRequirements(job.requirements)
    }
  }, [job])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      id: job?.id,
      title,
      description,
      requirements,
      status: job?.status || 'open'
    })
    onCancel() // This will close the dialog
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Job Title</Label>
        <Input
          id="title"
          placeholder="Enter job title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Job Description</Label>
        <Textarea
          id="description"
          placeholder="Enter job description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="requirements">Job Requirements</Label>
        <Textarea
          id="requirements"
          placeholder="Enter job requirements"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit">{job ? 'Update Job' : 'Create Job'}</Button>
      </div>
    </form>
  )
}

function ApplicantList({ jobId }: { jobId: number }) {
  const [applicants, setApplicants] = useState<Applicant[]>([])
  const [isApplicantDetailsOpen, setIsApplicantDetailsOpen] = useState(false)
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null)

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setApplicants(mockApplicants[jobId] || [])
    }, 500)
  }, [jobId])

  const updateApplicantStatus = (applicantId: number, newStatus: Applicant['status']) => {
    setApplicants(applicants.map(a => a.id === applicantId ? { ...a, status: newStatus } : a))
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.map(applicant => (
            <TableRow key={applicant.id}>
              <TableCell>{applicant.name}</TableCell>
              <TableCell>{applicant.email}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  applicant.status === 'applied' ? 'bg-blue-100 text-blue-800' :
                  applicant.status === 'reviewing' ? 'bg-yellow-100 text-yellow-800' :
                  applicant.status === 'interviewed' ? 'bg-purple-100 text-purple-800' :
                  applicant.status === 'offered' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {applicant.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Select
                    value={applicant.status}
                    onValueChange={(value) => updateApplicantStatus(applicant.id, value as Applicant['status'])}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="applied">Applied</SelectItem>
                      <SelectItem value="reviewing">Reviewing</SelectItem>
                      <SelectItem value="interviewed">Interviewed</SelectItem>
                      <SelectItem value="offered">Offered</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  <Dialog open={isApplicantDetailsOpen && selectedApplicant?.id === applicant.id} onOpenChange={(open) => {
                    setIsApplicantDetailsOpen(open)
                    if (!open) setSelectedApplicant(null)
                  }}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedApplicant(applicant)}>
                        <FileText className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800">
                      <DialogHeader>
                        <DialogTitle>Applicant Details: {applicant.name}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Resume:</h4>
                          <p className="text-sm">{applicant.resume}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Application Letter:</h4>
                          <p className="text-sm">{applicant.applicationLetter}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Application Time:</h4>
                          <p className="text-sm flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {new Date(applicant.applicationTime).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}