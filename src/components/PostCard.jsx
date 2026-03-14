import PostImage from "./PostCard-Components/PostImage"
import CommentSection from "./PostCard-Components/CommentSection"

const PostCard = () => {
  return (
    <div className="container mx-auto">
      <div className="flex h-screen py-10 justify-center">

        <div className="shadow-xl flex h-full">
          <PostImage />

          <CommentSection />
        </div>

      </div>
    </div>
  )
}

export default PostCard