import Profile from "./Profile"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UserComments from "./UserComments";
import { emma } from "../../constants/data"


const CommentSection = () => {
  
  return (
    <div className="w-2/5 bg-white overflow-y-auto h-full">
      {/* owner account name and img */}
      <div className="p-5 w-full sticky top-0 bg-white flex items-center justify-between font-semibold select-none border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Profile image={emma} />
          <div>
            <p>Emma Watson</p>
            <p className="font-normal text-xs">Original audio</p>
          </div>
        </div>
        <div className="cursor-pointer hover:text-gray-500">
          <MoreHorizIcon />
        </div>
      </div>

      <div>
        <p className="px-6 py-3 text-sm ps-18">
          Finally reunited after years! 🌊
          <br />
          What started as a simple plan turned into one of the most memorable trips ever.
          Sunset views, late night bonfire, endless laughter, and catching up on years of stories.
          <br /><br />
          <span className="text-blue-700 cursor-pointer">#moments &nbsp; #friends</span>
          <br /><br />
          Already missing this beach and this amazing group.
          Next reunion trip planning starts now! 🌅🔥
        </p>

        <UserComments />
    </div>
    </div>
  )
}

export default CommentSection