'use client'
import { useEffect, useState } from 'react'
import '../../../app/globals.scss'
import Sidebar from '@/components/Home/Sidebar/Sidebar'
import BlogDetails from '@/components/BlogDetailsPage/BlogDetails'
import AddComments from '@/components/BlogDetailsPage/AddComments'

export default function BlogDetailsPage({ params }) {
  return (
    <section className="blog-details-wrapper container mx-auto">
      <Sidebar />
      <BlogDetails params={params} />
      <div className="commets-area mt-10">
        <div className="add-comment flex justify-center mx-auto w-[500px] items-center">
          <AddComments params={params} />
        </div>
      </div>
    </section>
  )
}
