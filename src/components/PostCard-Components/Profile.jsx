

const Profile = ({image}) => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden border">
      <img src={image} alt="" className="w-full h-10 object-cover" draggable={false} />
    </div>
  )
}

export default Profile