'use client'
import '../../../app/globals.scss'
import Sidebar from '@/components/Home/Sidebar/Sidebar'
import BlogDetails from '@/components/BlogDetailsPage/BlogDetails'
import AddComments from '@/components/BlogDetailsPage/AddComments'

export default function BlogDetailsPage({ params }) {
  return (
    <section className="blog-details-wrapper container mx-auto">
      <Sidebar />
      <BlogDetails params={params} />
    </section>
  )
}
