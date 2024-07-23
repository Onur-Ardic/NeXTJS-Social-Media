import dbConnect from '@/lib/mongodb'
import Blog from '../../../../models/Blog'

export async function GET(req, res) {
  await dbConnect()

  try {
    const blogs = await Blog.find({})
    return new Response(JSON.stringify({ success: true, data: blogs }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

export async function POST(req, res) {
  await dbConnect()

  try {
    const body = await req.json()
    const blog = await Blog.create(body)
    return new Response(JSON.stringify({ success: true, data: blog }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
