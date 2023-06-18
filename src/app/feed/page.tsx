import PostCard from "../components/common/PostCard/PostCard";

export default function Feed() {

  return (
    <div className="w-3/4 mx-auto h-screen p-6">
      <div className="grid grid-cols-3 gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  )
}