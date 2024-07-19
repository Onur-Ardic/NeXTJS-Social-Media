import AddBlog from '@/components/Home/BlogPosts/AddBlog'
import Sidebar from '@/components/Home/Sidebar/Sidebar'

export default function Home() {
  return (
    <main className="main container mx-auto">
      <Sidebar />
      <AddBlog />
    </main>
  )
}
