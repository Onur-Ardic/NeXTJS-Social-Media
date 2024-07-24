import { NextResponse } from 'next/server'
import Blog from '../../../../../../models/Blog'
import dbConnect from '@/lib/mongodb'

// PATCH request handler
export async function PATCH(req, { params }) {
  await dbConnect()

  const { id } = params
  const { user, comment } = await req.json()

  try {
    const blog = await Blog.findById(id)

    if (!blog) {
      return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 })
    }

    blog.comments.push({ user, comment, date: new Date() })
    await blog.save()

    return NextResponse.json({ success: true, data: blog }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
