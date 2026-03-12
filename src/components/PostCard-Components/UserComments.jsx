import Comment from "./Comment"
import { comments } from "../../constants/data"

const UserComments = () => {


  return (
    <div className='p-5 flex flex-col gap-5'>

      {comments.map((comment)=>{
        return (
          <Comment profile={comment.profile} username={comment.username} comment={comment.comment}/>
        )
      })}
    </div>
  )
}

export default UserComments