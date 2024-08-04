'use client';

import React, { useState } from 'react'
import axios from 'axios'

type ParsedData = {
  name?: string
  email?: string
  phone?: string
}

type ResumeUploadProps = {
  onParsed: (data: ParsedData) => void
}

export default function ResumeUpload({ onParsed }: ResumeUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append('resume', file)

    try {
      const response = await axios.post('/api/parse-resume', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      onParsed(response.data)
    } catch (error) {
      console.error('Error parsing resume:', error)
      // Handle error (e.g., show error message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="mb-6">
      <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
        Upload Resume
      </label>
      <div className="flex items-center space-x-4">
        <input 
          id="resume"
          type="file" 
          onChange={handleFileChange} 
          accept=".pdf,.doc,.docx"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        <button 
          onClick={handleUpload} 
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          disabled={!file || uploading}
        >
          {uploading ? 'Parsing...' : 'Parse Resume'}
        </button>
      </div>
    </div>
  )
}