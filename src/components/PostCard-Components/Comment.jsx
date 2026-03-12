import Profile from "./Profile"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

const Comment = ({ username, comment, profile }) => {
  const [isLiked, setIsLiked] = useState(false);


  return (
    <div className='comment flex justify-between items-start'>
      <div className='flex gap-3 items-start'>
        <div>
          <Profile image={profile} />
        </div>
        <div>
          <div className="flex gap-3">
            <p className="font-semibold text-sm"><span className="cursor-pointer hover:border-b-2 hover:border-black border-b-2 border-transparent">{username}</span> &nbsp;&nbsp; <span className="font-normal">{comment}</span></p>
          </div>
          <p className="text-gray-500 text-sm cursor-pointer">reply</p>
        </div>
      </div>
      <button className="cursor-pointer justify-self-end" onClick={()=>setIsLiked(!isLiked)}>
        {isLiked ?
          <FavoriteIcon fontSize="small" htmlColor="red" /> :
          <FavoriteBorderIcon fontSize="small"/>
        }
      </button>
    </div>
  )
}

export default Comment