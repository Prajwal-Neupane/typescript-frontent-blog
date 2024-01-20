import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

const ProfileCard = () => {
  return (
    <div className="relative container h-fit w-[100%] xl:w-[80%] pb-5 mt-16 border-gray-300 border-2 rounded-xl items-center flex flex-col gap-4 shadow-xl shadow-red-300">
      <img
        className="relative object-cover rounded-full -top-10 w-28 h-28"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="profile"
      />
      <h1 className="relative text-3xl font-semibold text-center -top-10">
        Prajwal Neupane
      </h1>
      <p className="relative text-xl text-center -top-12 ">A web developer</p>
      <hr className="relative w-full border-2 border-gray-300 -top-10" />
      <div className="relative flex gap-5 -top-10 ">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[1.3rem] font-semibold">Followers</h1>
          <p className="text-xl text-center">12</p>
        </div>
        <div className="border-l-2 border-black"></div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[1.3rem] font-semibold">Following</h1>
          <p className="text-xl text-center">12</p>
        </div>
      </div>
      <div className="relative flex gap-6 -top-6">
        <FaFacebook
          className="transition-all duration-200 hover:text-blue-700 hover:cursor-pointer"
          size={20}
        />
        <FaLinkedin
          className="transition-all duration-200 hover:text-blue-900 hover:cursor-pointer"
          size={20}
        />
        <FaPinterest
          className="transition-all duration-200 hover:text-red-800 hover:cursor-pointer"
          size={20}
        />
        <FaTwitter
          className="transition-all duration-200 hover:text-blue-700 hover:cursor-pointer"
          size={20}
        />
      </div>
      <button className="relative px-3 py-3 font-semibold text-white transition-all duration-300 rounded-full bg-primary hover:bg-secondary">
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;
