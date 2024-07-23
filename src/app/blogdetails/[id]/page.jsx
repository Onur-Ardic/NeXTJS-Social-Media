'use client'
import { useEffect, useState } from 'react'
import '../../../app/globals.scss'
import Sidebar from '@/components/Home/Sidebar/Sidebar'
import BlogDetails from '@/components/BlogDetailsPage/BlogDetails'

export default function BlogDetailsPage({ params }) {
  return (
    <section className="blog-details-wrapper container mx-auto">
      <Sidebar />
      <BlogDetails params={params} />
      <div className="commets-area mt-10">
        <h3 className="text-xl mt-10 text-center">Comments</h3>

        <div className="add-comment flex justify-center">
          <form>
            <input type="text" className="user" />
            <input type="text" placeholder="Your Comment" />
            <button className="bg-blue-500 text-white p-2 rounded-md">Comment</button>
          </form>
        </div>
      </div>
    </section>
  )
}
