import { useEffect, useState } from 'react'
import SubmitButton from '../ui/SubmitButton'
import GetComments from './GetComments'
import { useSelector } from 'react-redux'

const AddComments = ({ params, comments }) => {
  const [user, setUser] = useState('')
  const [comment, setComment] = useState('')
  const [newComments, setNewComments] = useState(null)
  const userStatus = useSelector((state) => state.auth.userStatus)

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
      const data = res.json()
      setNewComments(data.data)
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
    <div>
      {userStatus && (
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
              className="w-full mb-3 p-1 rounded-sm outline-none text-black"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <SubmitButton type={'submit'} text={'Add Comment'} variant={'outlined'} />
          </div>
        </form>
      )}

      <GetComments comments={comments} newComments={newComments} />
    </div>
  )
}

export default AddComments
