import React from "react";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import Posts from "../components/Posts";
import Navbar from "../components/Navbar";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex mx-auto max-w-[1550px]  ">
        <Sidebar />

        <Posts />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
