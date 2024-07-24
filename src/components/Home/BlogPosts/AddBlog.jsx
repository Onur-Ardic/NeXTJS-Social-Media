'use client'
import ImageIcon from '@mui/icons-material/Image'
import SubmitButton from '@/components/ui/SubmitButton'
import { useState, useEffect } from 'react'
import BlogPosts from './BlogPosts'
import { useSelector } from 'react-redux'

export default function AddBlog() {
  const [user, setUser] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [content, setContent] = useState('')
  const [displayImage, setDisplayImage] = useState(false)
  const [newBlogPost, setNewBlogPost] = useState(null)
  const userStatus = useSelector((state) => state.auth.userStatus)

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user')
    if (userFromStorage) {
      setUser(userFromStorage)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, title, content, image }),
    })

    if (res.ok) {
      const data = await res.json()
      setTitle('')
      setContent('')
      setImage('')
      setNewBlogPost(data.data)
      alert('Blog post created!')
    } else {
      alert('Failed to create blog post')
    }
  }

  return (
    <div className="Blogs-container">
      {userStatus && (
        <form onSubmit={handleSubmit} className="border p-5 mt-10 rounded-lg">
          <div className="flex flex-col">
            <h6 className="text-xl text-center mb-3">Create Post</h6>

            <input
              type="text"
              value={user}
              className="p-1 outline-none rounded-lg"
              placeholder="User Email"
              disabled
            />

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="p-1 outline-none rounded-lg mt-2"
              placeholder="Post Title"
            />

            {displayImage && (
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="p-1 outline-none rounded-lg mt-2"
                placeholder="Post Image"
              />
            )}
          </div>
          <div className="flex flex-col">
            <textarea
              value={content}
              rows={5}
              onChange={(e) => setContent(e.target.value)}
              required
              className="rounded-lg p-1 mt-2"
              placeholder="Post Content"
            ></textarea>
          </div>

          <div
            onClick={() => setDisplayImage(!displayImage)}
            className="add-image-buttons text-2xl"
          >
            <ImageIcon />
          </div>
          <div className="buttons mt-2 w-[110px]">
            <SubmitButton text={'Post'} type={'submit'} variant={'primary'} />
          </div>
        </form>
      )}

      <BlogPosts newBlog={newBlogPost} />
    </div>
  )
}
