'use client';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import ResumeUpload from './ResumeUpload'

type FormData = {
  name: string
  email: string
  phone: string
  coverLetter: string
}

export default function ApplicationForm({ jobId }: { jobId: string }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>()
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
      const response = await axios.post('/api/apply', { ...data, jobId })
      console.log('Application submitted:', response.data)
      // Handle successful submission (e.g., show success message, redirect)
    } catch (error) {
      console.error('Error submitting application:', error)
      // Handle error (e.g., show error message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleParsedResume = (parsedData: Partial<FormData>) => {
    Object.entries(parsedData).forEach(([key, value]) => {
      setValue(key as keyof FormData, value as string)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <ResumeUpload onParsed={handleParsedResume} />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: 'Email is required' })}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
        <textarea
          id="coverLetter"
          {...register('coverLetter')}
          rows={4}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}