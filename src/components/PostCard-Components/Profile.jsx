import { user } from "../../constants/data"

const Profile = () => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <img src={user} alt="" className="w-full object-cover" draggable={false} />
    </div>
  )
}

export default Profile