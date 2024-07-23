import dbConnect from '@/lib/mongodb'
import Blog from '../../../../../../models/Blog'

export async function PATCH(req, { params }) {
  await dbConnect()

  const { id } = params
  const { user, comment } = await req.json()

  try {
    const blog = await Blog.findById(id)

    if (!blog) {
      return new Response(JSON.stringify({ success: false, message: 'Blog not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    blog.comments.push({ user, comment })
    await blog.save()

    return new Response(JSON.stringify({ success: true, data: blog }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
