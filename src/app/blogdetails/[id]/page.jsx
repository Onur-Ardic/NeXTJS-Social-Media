import React from 'react'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async ({ params }) => {
  const { id } = params
  const data = await getData(id)

  const { blog } = data
  const { title, content, image, date, user } = blog

  return (
    <section className="blog-details-wrapper container mx-auto">
      <div className="blog-details-card mt-10">
        <div className="blog-image">{image && <img src={image} alt={title} />}</div>

        <div className="blog-content">
          <h2>{title}</h2>
          <p>{content}</p>
          <p>{user}</p>
          <p>Paylaşılma Tarihi: {new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  )
}

export default Page
