'use client';

import React, { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import axios from 'axios'
import ResumeUpload from './ResumeUpload'

type FormData = {
  name: string
  email: string
  phone: string
  coverLetter: string
  previousExperience: {
    companyName: string
    startDate: string
    endDate: string
    description: string
  }[]
  education: {
    institutionName: string
    startDate: string
    endDate: string
    description: string
  }[]
  availableStartDate: string
  referral: string
}

export default function ApplicationForm({ jobId }: { jobId: string }) {
  const { register, control, handleSubmit, setValue, formState: { errors } } = useForm<FormData>()
  const [submitting, setSubmitting] = useState(false)

  const { fields: experienceFields, append: appendExperience, remove: removeExperience } = useFieldArray({
    control,
    name: "previousExperience"
  });

  const { fields: educationFields, append: appendEducation, remove: removeEducation } = useFieldArray({
    control,
    name: "education"
  });

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
      setValue(key as keyof FormData, value as any)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-8 bg-white p-8 rounded-lg shadow-lg">
      <ResumeUpload onParsed={handleParsedResume} />

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-black">Full Name</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="pointer mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
        />
        {errors.name && <p className="mt-2 text-sm text-black">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-black">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: 'Email is required' })}
          className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
        />
        {errors.email && <p className="mt-2 text-sm text-black">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-black">Phone</label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-black">Previous Experience</label>
        {experienceFields.map((field, index) => (
          <div key={field.id} className="space-y-2 mb-4 p-4 border border-black rounded">
            <input
              {...register(`previousExperience.${index}.companyName` as const)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
              placeholder="Company Name"
            />
            <div>
              <label className="block text-sm text-black">Start Date</label>
              <input
                type="date"
                {...register(`previousExperience.${index}.startDate` as const)}
                className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label className="block text-sm text-black">End Date</label>
              <input
                type="date"
                {...register(`previousExperience.${index}.endDate` as const)}
                className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
              />
            </div>
            <textarea
              {...register(`previousExperience.${index}.description` as const)}
              rows={4}
              className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
              placeholder="Description"
            ></textarea>
            <button type="button" onClick={() => removeExperience(index)} className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => appendExperience({ companyName: '', startDate: '', endDate: '', description: '' })} className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add Experience</button>
      </div>

      <div>
        <label className="block text-sm font-semibold text-black">Education</label>
        {educationFields.map((field, index) => (
          <div key={field.id} className="space-y-2 mb-4 p-4 border border-black rounded">
            <input
              {...register(`education.${index}.institutionName` as const)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
              placeholder="Institution Name"
            />
            <div>
              <label className="block text-sm text-black">Start Date</label>
              <input
                type="date"
                {...register(`education.${index}.startDate` as const)}
                className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label className="block text-sm text-black">End Date</label>
              <input
                type="date"
                {...register(`education.${index}.endDate` as const)}
                className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
              />
            </div>
            <textarea
              {...register(`education.${index}.description` as const)}
              rows={4}
              className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
              placeholder="Description"
            ></textarea>
            <button type="button" onClick={() => removeEducation(index)} className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => appendEducation({ institutionName: '', startDate: '', endDate: '', description: '' })} className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Add Education</button>
      </div>

      <div>
        <label htmlFor="coverLetter" className="block text-sm font-semibold text-black">Cover Letter</label>
        <textarea
          id="coverLetter"
          {...register('coverLetter')}
          rows={6}
          className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
        ></textarea>
      </div>

      <div>
        <label htmlFor="availableStartDate" className="block text-sm font-semibold text-black">Available Start Date</label>
        <input
          id="availableStartDate"
          type="date"
          {...register('availableStartDate')}
          className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
        />
      </div>

      <div>
        <label htmlFor="referral" className="block text-sm font-semibold text-black">Referral</label>
        <input
          id="referral"
          type="text"
          {...register('referral')}
          className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
          placeholder="Enter referral name or code (if any)"
        />
      </div>

      <button 
        type="submit" 
        className="w-full flex justify-center py-3 px-6 border border-black rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out cursor-pointer"
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}