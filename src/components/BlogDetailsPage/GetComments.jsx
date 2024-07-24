import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const GetComments = ({ comments }) => {
  return (
    <div>
      <div className="comments">
        <h4 className="text-center text-lg mb-10">Comments</h4>
        {comments.map((comment, index) => (
          <div key={index} className="comment-item p-3 mb-5 border">
            <div className="comment-user flex  items-center">
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
