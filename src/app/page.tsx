import Image from "next/image";
import PostCard from "./components/common/PostCard/PostCard";

export default function Home() {
  return (
    <main className="px-24 py-6">
      <h1 className="text-3xl font-semibold">UI Components</h1>

      <div className="mt-8">
        <div className="grid grid-cols-3 gap-8">
          <PostCard
            username={"mike_foreman"}
            userImageSrc={
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
            }
            datestring={"2 days ago"}
            postThumbnailSrc={
              "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80"
            }
            postTitle={"2 steps to start your illustration career"}
            postContent={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias aperiam quis asperiores excepturi"
            }
          />
          <PostCard
            username={"leeshane"}
            userImageSrc={
              "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80"
            }
            datestring={"2 days ago"}
            postThumbnailSrc={
              "https://images.unsplash.com/photo-1578589385589-c94a956e2450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
            }
            postTitle={"2 steps to start your illustration career"}
            postContent={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias aperiam quis asperiores excepturi"
            }
          />
          <PostCard
            username={"mike_foreman"}
            userImageSrc={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
            }
            datestring={"2 days ago"}
            postThumbnailSrc={
              "https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            }
            postTitle={"2 steps to start your illustration career"}
            postContent={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias aperiam quis asperiores excepturi"
            }
          />
        </div>
      </div>
    </main>
  );
}
