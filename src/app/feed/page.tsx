"use client";

import PostCard from "@/app/components/common/PostCard/PostCard";
import useFeed from "./hooks/useFeed";

export default function Feed() {
  const { posts, isLoading } = useFeed();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 gap-8">
        {posts.length > 0 ? (
          <>
            {posts.map((post, index) => (
              <PostCard
                key={index}
                username={"mike_foreman"}
                userImageSrc={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
                }
                datestring={"2 days ago"}
                postThumbnailSrc={
                  "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80"
                }
                postTitle={post.title}
                postContent={post.body}
              />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
