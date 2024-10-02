import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("smoothhire")
    
    const body = await request.json()
    const { name, email, phone, coverLetter, jobId } = body

    const application = {
      name,
      email,
      phone,
      coverLetter,
      jobId,
      appliedAt: new Date()
    }

    const result = await db.collection("applications").insertOne(application)

    return NextResponse.json({ message: 'Application submitted successfully', id: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error('Error submitting application:', error)
    return NextResponse.json({ message: 'Error submitting application' }, { status: 500 })
  }
}