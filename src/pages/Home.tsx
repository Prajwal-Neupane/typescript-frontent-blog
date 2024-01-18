import React from "react";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />

      <Posts />
      <Rightbar />
    </div>
  );
};

export default Home;
