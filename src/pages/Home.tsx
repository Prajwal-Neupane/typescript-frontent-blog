import React from "react";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import Posts from "../components/Posts";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex mx-auto max-w-[1400px] min-h-screen ">
        <Sidebar />

        <Posts />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
