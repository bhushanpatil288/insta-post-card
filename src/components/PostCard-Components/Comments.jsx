import Profile from "./Profile"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Comments = () => {
  return (
    <div className="w-2/5 bg-white">
      {/* owner account name and img */}
      <div className="p-5 flex items-center justify-between font-semibold select-none border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Profile />
          <p>Emma Watson</p>
        </div>
        <div className="cursor-pointer hover:text-gray-500">
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  )
}

export default Comments