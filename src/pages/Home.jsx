import React from "react";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import Posts from "../components/Posts";
import Navbar from "../components/Navbar";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex mx-auto max-w-[1550px]  ">
        <Sidebar />

        <Posts />
        <Rightbar />
        <Link to={"/create"} className="absolute bottom-10 right-[30rem]">
          <IoIosAddCircle size={60} className="rounded-full bg-primary" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
