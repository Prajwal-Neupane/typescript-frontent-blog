import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

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
    <div className="relative flex-col flex-1 h-[100vh] overflow-auto">
      {posts && posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Posts;
