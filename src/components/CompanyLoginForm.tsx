'use client';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from "next/navigation";

import Link from 'next/link';

type FormData = {
  email: string

  password: string
}

export default function CompanyLoginForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [submitting, setSubmitting] = useState(false)



  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {


      console.log('Application submitted:', data)

    } catch (error) {
      console.error('Error submitting application:', error)

    } finally {
      setSubmitting(false);
      router.push("/companyA/DashBoard");
    }
  }



  return (












    <div className="min-h-screen bg-white flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-4xl font-extrabold text-black text-center mb-4">
          Login to your Company
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Please enter your login details
        </p>
      </div>









      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10 border border-black">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="appearance-none block w-full px-3 py-2 border border-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
              </div>
              {errors.email && <p className="mt-2 text-sm text-black">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register('password', { required: 'Password is required' })}
                  className="appearance-none block w-full px-3 py-2 border border-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                disabled={submitting}
              >
                {submitting ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              New to this platform? {" "}
              <Link href='/CompanyRegistration' className='font-medium text-black hover:underline'>
                Register your Company
              </Link>
            </p>
          </div>
        </div>
      </div>











    </div>
  )
}