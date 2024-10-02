'use client';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from "next/navigation";
import axios from 'axios'
import Link from 'next/link';

type FormData = {
  email: string
  password:string
}

export default function CompanyRegisterForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [submitting, setSubmitting] = useState(false)

  

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
    //   const response = await axios.post('/api/apply', { ...data, jobId })
    //   console.log('Application submitted:', response.data)
      console.log('Application submitted:', data)
      // Handle successful submission (e.g., show success message, redirect)
    } catch (error) {
      console.error('Error submitting application:', error)
      // Handle error (e.g., show error message)
    } finally {
      setSubmitting(false);
      router.push("/companyA/dashboard");
    }
  }

  

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg">
      
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
        <label htmlFor="password" className="block text-sm font-semibold text-black">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: 'Password is required' })}
          className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
        />
      </div>

      <button 
        type="submit" 
        className="w-full flex justify-center py-3 px-6 border border-black rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out cursor-pointer"
        disabled={submitting}
      >
        {submitting ? 'Logging in...' : 'Login'}
      </button>
    <p className="text-center text-lg">New to this platform? <Link href='/CompanyRegistration' className='hover:underline text-blue-600'>Register your Company</Link></p>
    </form>
    </>
  )
}