import { useState, useEffect } from "react";

const useFeed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllPosts = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/posts', {
        cache: 'no-store'
      });
      const data = await response.json();
      setPosts(data.posts);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return { posts, isLoading };
}

export default useFeed;
