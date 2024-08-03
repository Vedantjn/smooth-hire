import { NextResponse } from 'next/server'
import { parseResume } from '@/lib/resumeParser'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('resume') as File

    if (!file) {
      return NextResponse.json({ message: 'No file uploaded' }, { status: 400 })
    }

    const parsedData = await parseResume(file)
    return NextResponse.json(parsedData)
  } catch (error) {
    console.error('Error parsing resume:', error)
    return NextResponse.json({ message: 'Error parsing resume' }, { status: 500 })
  }
}