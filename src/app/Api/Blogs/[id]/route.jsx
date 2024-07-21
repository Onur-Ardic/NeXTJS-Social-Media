import BlogPosts from '@/components/Home/BlogPosts/BlogPosts'
import dbConnect from '@/lib/mongodb'
import blogs from '@/models/Blog'

import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  const { id } = params
  await dbConnect()
  const blog = await blogs.findOne({ _id: id })
  console.log(blog)
  return NextResponse.json({ BlogPosts }, { status: 200 })
}
