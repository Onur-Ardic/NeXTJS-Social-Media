import BlogPosts from '@/components/Home/BlogPosts/BlogPosts'
import Sidebar from '@/components/Home/Sidebar/Sidebar'

export default function Home() {
  return (
    <main className="main container mx-auto">
      <Sidebar />
      <BlogPosts />
    </main>
  )
}
