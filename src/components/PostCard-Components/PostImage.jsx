import { friends } from "../../constants/data";

const PostImage = () => {
  return (
    <div className="w-3/5">
      <div className="w-full h-full shadow">
        <img src={friends} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default PostImage