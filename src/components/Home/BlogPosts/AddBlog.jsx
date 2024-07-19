'use client'
import SubmitButton from '@/components/ui/SubmitButton'
import { useState } from 'react'
import BlogPosts from './BlogPosts'

export default function AddBlog() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, image }),
    })

    if (res.ok) {
      setTitle('')
      setContent('')
      setImage('')
      alert('Blog post created!')
    } else {
      alert('Failed to create blog post')
    }
  }

  return (
    <div className="Blogs-container">
      <form onSubmit={handleSubmit} className="border p-5 mt-10 rounded-lg">
        <div className="flex flex-col">
          <h6 className="text-xl text-center mb-3">Create Post</h6>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="p-1 outline-none rounded-lg"
            placeholder="Post Title"
          />

          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="p-1 outline-none rounded-lg mt-2"
            placeholder="Post Image"
          />
        </div>
        <div className="flex flex-col">
          <textarea
            value={content}
            rows={5}
            onChange={(e) => setContent(e.target.value)}
            required
            className="rounded-lg p-1 mt-2"
            placeholder="Read a Post"
          ></textarea>
        </div>
        <div className="buttons mt-2 w-[110px]">
          <SubmitButton text={'Post'} type={'submit'} variant={'primary'} />
        </div>
      </form>
      <BlogPosts />
    </div>
  )
}
