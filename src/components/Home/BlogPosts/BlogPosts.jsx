'use client'
import { useState, useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

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
        <h1 className="text-center text-xl m-3 Roboto">Blog Posts</h1>
        <ul className="w-100 flex flex-col gap-3">
          {blogs?.map((blog) => (
            <li className="w-full border p-3 rounded-lg bg-white Poppins " key={blog._id}>
              <h4 className="mb-3">
                <span className="text-lg">
                  <AccountCircleIcon className="text-xl" />
                </span>
                {blog.user}
              </h4>

              <hr />
              {blog.image && (
                <img src={blog.image} className="w-full h-[350px] object-cover rounded-lg" alt="" />
              )}
              <h2 className="text-md mt-2 playwrite">{blog.title}</h2>
              <p className="mt-2 text-sm ">{blog.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BlogPosts
