'use client'
import { useState, useEffect } from 'react'

function BlogPosts() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('/api/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data.data))
  }, [])

  return (
    <>
      <div>
        <h1 className="text-center">Blog Posts</h1>
        <ul className="w-100">
          {blogs?.map((blog) => (
            <li key={blog._id}>
              <img src={blog.image} alt="" />
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BlogPosts
