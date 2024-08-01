import { useEffect, useState } from 'react'
import CircularLoading from '../ui/CircularLoading'
import AddComments from './AddComments'

const BlogDetails = ({ params }) => {
  const [datablog, setDataBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`http://localhost:3000/api/blogs/${params.id}`)
      .then((result) => result.json())
      .then((data) => {
        setDataBlog(data.blog)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [params.id])

  if (loading) {
    return <CircularLoading />
  }

  if (!datablog) {
    return <div>Blog not found</div>
  }

  const { title, content, user, image, date, comments } = datablog
  return (
    <section className="blog-details flex justify-center gap-10">
      <div className="blog-details-card mt-10 border p-3">
        <div className="blog-image">
          {image && (
            <div className="image-wrapper">
              <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          )}
        </div>
        <div className="blog-content mt-2">
          <h2 className="text-xl">{title}</h2>
          <p className="mt-3">{content}</p>
          <div className="date-user flex gap-3 mt-3">
            {user && <p>{user}</p>}
            <p>Paylaşılma Tarihi: {new Date(date).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div className="get-comments m-1  ">
        <AddComments params={params} comments={comments} />
      </div>
    </section>
  )
}

export default BlogDetails
