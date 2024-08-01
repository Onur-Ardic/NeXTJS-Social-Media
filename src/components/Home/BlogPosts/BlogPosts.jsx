'use client'
import { useState, useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Link from 'next/link'

function BlogPosts({ newBlog }) {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('/api/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data.data))
  }, [])

  useEffect(() => {
    if (newBlog) {
      setBlogs((prevBlogs) => [newBlog, ...prevBlogs])
    }
  }, [newBlog])

  return (
    <>
      <div>
        <h1 className="text-center text-xl m-3 Roboto">Blog Posts</h1>
        <ul className="w-100 flex flex-col gap-3">
          {blogs?.map((blog) => (
            <Link href={`/blogdetails/${blog._id}`} key={blog._id}>
              <li className="w-full border p-3 rounded-lg bg-white Poppins text-black">
                <h4 className="mb-3">
                  <span className="text-lg">
                    <AccountCircleIcon className="text-xl" />
                  </span>
                  {blog.user}
                </h4>

                <hr />
                {blog.image && (
                  <img
                    src={blog.image}
                    className="w-full h-[350px] object-cover rounded-lg"
                    alt={blog.title}
                  />
                )}
                <h2 className="text-md mt-2 playwrite">{blog.title}</h2>
                <p className="mt-2 text-sm ">{blog.content}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BlogPosts
