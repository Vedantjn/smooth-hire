'use client';
import { useState } from 'react'
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
      // Handle error (show error message to user)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="mb-4">
      <input 
        type="file" 
        onChange={handleFileChange} 
        accept=".pdf,.doc,.docx"
        className="mb-2"
      />
      <button 
        onClick={handleUpload} 
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        disabled={!file || uploading}
      >
        {uploading ? 'Uploading...' : 'Upload and Parse Resume'}
      </button>
    </div>
  )
}