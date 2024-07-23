import dbConnect from '@/lib/mongodb'
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import Blog from '../../../../../models/Blog'

export async function GET(req, { params }) {
  const { id } = params
  await dbConnect()

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 })
  }

  try {
    const blog = await Blog.findOne({ _id: id })

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json({ blog }, { status: 200 })
  } catch (error) {
    console.error('Error fetching blog:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
