'use client'
import '../../../app/globals.scss'
import Sidebar from '@/components/Home/Sidebar/Sidebar'
import BlogDetails from '@/components/BlogDetailsPage/BlogDetails'


export default function BlogDetailsPage({ params }) {
  return (
    <section className="blog-details-wrapper container mx-auto">
      <Sidebar />
      <BlogDetails params={params} />
    </section>
  )
}
