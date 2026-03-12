import PostImage from "./PostCard-Components/PostImage"
import Comments from "./PostCard-Components/Comments"

const PostCard = () => {
  return (
    <div className="container mx-auto">
      <div className="flex h-screen py-10 justify-center">

        <div className="shadow-xl flex h-full">
          <PostImage />

          <Comments />
        </div>

      </div>
    </div>
  )
}

export default PostCard