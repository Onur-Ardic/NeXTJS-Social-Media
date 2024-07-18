'use client'
import { useState, useEffect } from 'react'

export default function Blogs() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('/Api/Blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data.data))
  }, [])

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs?.map((blog) => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
