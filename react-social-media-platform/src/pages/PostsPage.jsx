import { useEffect, useState } from "react";
import PostList from "../components/PostList";

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Social Media Platform</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default PostsPage;