import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useEffect, useState } from 'react'

const GetComments = ({ comments, newComment }) => {
  const [allComments, setAllComments] = useState(comments)

  useEffect(() => {
    if (newComment) {
      setAllComments((prevComments) => [newComment, ...prevComments])
    }
  }, [newComment])

  return (
    <div>
      <div className="comments">
        <h4 className="text-center text-lg mb-10">Comments</h4>
        {allComments?.map((comment, index) => (
          <div key={index} className="comment-item p-3 mb-5 border">
            <div className="comment-user flex items-center">
              <AccountCircleIcon />
              <p> {comment.user}</p>
            </div>
            <hr />
            <p className="comment-text">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetComments
