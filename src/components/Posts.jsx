import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await axios.get("http://localhost:3001/api/blogs");
      setPosts(response.data);
    };
    fetchAllPosts();
  }, []);

  return (
    <div className="flex-col flex-1 h-screen overflow-scroll ">
      {posts && posts.map((post) => <Post key={post._id} posts={post} />)}
    </div>
  );
};

export default Posts;
