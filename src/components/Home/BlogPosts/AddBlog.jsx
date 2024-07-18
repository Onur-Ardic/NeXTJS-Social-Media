'use client'
import SubmitButton from '@/components/ui/SubmitButton'
import { useState } from 'react'

export default function NewBlog() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })

    if (res.ok) {
      setTitle('')
      setContent('')
      alert('Blog post created!')
    } else {
      alert('Failed to create blog post')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border p-5 mt-10">
      <div className="flex flex-col">
        <h6 className="text-xl text-center">Create Post</h6>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="p-1 outline-none rounded-lg"
          placeholder="Post Title"
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
      <SubmitButton text={'Post'} type={'submit'} />
    </form>
  )
}
