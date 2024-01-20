import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="flex-col flex-1 h-screen overflow-scroll">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
