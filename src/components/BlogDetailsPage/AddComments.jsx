import { useEffect, useState } from 'react'
import SubmitButton from '../ui/SubmitButton'

const AddComments = ({ params }) => {
  const [user, setUser] = useState('')
  const [comment, setComment] = useState('')

  const addCommentHandler = async (e) => {
    e.preventDefault()

    const res = await fetch(`http://localhost:3000/api/blogs/${params.id}/comments`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, comment }),
    })

    if (res.ok) {
      setComment('')
      alert('Comment added!')
    } else {
      alert('Failed to add comment')
    }
  }

  useEffect(() => {
    setUser(localStorage.getItem('user') || '')
  }, [])

  return (
    <form className="mt-10 rounded-sm border p-3 w-full" onSubmit={addCommentHandler}>
      <div className="form input">
        <input
          type="text"
          value={user}
          className="user w-full p-1 rounded-sm"
          placeholder="username"
          disabled
        />
      </div>
      <div className="form-input mt-3">
        <textarea
          rows={10}
          placeholder="Your Comment"
          className="w-full mb-3 p-1 rounded-sm outline-none"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <SubmitButton type={'submit'} text={'Add Comment'} variant={'outlined'} />
      </div>
    </form>
  )
}

export default AddComments
