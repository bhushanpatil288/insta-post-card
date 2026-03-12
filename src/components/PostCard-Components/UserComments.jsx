import Comment from "./Comment"
// import { comments } from "../../constants/data"
import { CommentContext } from "../../context/CommentsContextProvider";
import { Button, TextField } from "@mui/material"
import EmojiPicker from 'emoji-picker-react';
import { useState, useCallback, useContext } from "react";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const UserComments = () => {
  const [isEmojiOpen, SetIsEmojiOpen] = useState(false);
  const [comment, setComment] = useState('');
  const {lComments, setLComments} = useContext(CommentContext);
  const [emoji, setEmoji] = useState('');

  const handleChange = (e) => {
    if (emoji) {
      setEmoji('');
    }
    setComment(e.target.value);
    if (isEmojiOpen) {
      SetIsEmojiOpen(false);
    }
  }
  
  const handleClick = (e)=>{
    let c = {
      id: Date.now(),
      username: "unknown",
      comment,
      profile: "/images/generic-user.png"
    }
    setLComments([...lComments, c])
    setComment('');
  }
  
  const handleEmoji = useCallback((emojiObject) => {
    setComment((prevComment) => prevComment + emojiObject.emoji);
  }, [comment])

  return (
    <>

      <div className='p-5 flex flex-col gap-5'>

        {lComments.map((comment) => {
          return (
            <Comment key={comment.id} profile={comment.profile} username={comment.username} comment={comment.comment} />
          )
        })}
      </div>


      <div className="flex gap-1 relative mt-full">
        <Button onClick={() => { SetIsEmojiOpen(!isEmojiOpen) }}>
          <SentimentSatisfiedAltIcon />
        </Button>

        {isEmojiOpen &&
          <div className="absolute top-10">
            <EmojiPicker onEmojiClick={(emojiObject) => {
              handleEmoji(emojiObject)
            }} />
          </div>
        }

        <TextField
          value={comment}
          id="standard-basic"
          placeholder="Add a comment..."
          variant="standard"
          fullWidth
          className="h-full"
          onChange={handleChange}
        />

        <Button
          autoCapitalize="off"
          onClick={handleClick}
        >
          Post
        </Button>
      </div>
    </>
  )
}

export default UserComments