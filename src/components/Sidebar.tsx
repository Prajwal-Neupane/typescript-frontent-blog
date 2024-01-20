import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { MdExplore } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { BsFillSave2Fill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className=" md:px-5 w-[15%] md:w-[20%] pt-5 border-r-2 border-gray-200 ">
      <div className="flex flex-col gap-4 pb-4 border-b-2 border-gray-200">
        <div className="flex items-center gap-4 px-4 py-4 transition-colors duration-300 rounded-xl hover:bg-red-300 hover:cursor-pointer">
          <AiFillHome className="size-6 md:size-6" color="grey" />
          <p className="hidden text-xl text-gray-600 md:block">Home</p>
        </div>
        <div className="flex items-center gap-4 px-4 py-4 transition-colors duration-300 rounded-xl hover:bg-red-300 hover:cursor-pointer">
          <FaMessage className="size-6 md:size-6" color="grey" />
          <p className="hidden text-xl text-gray-600 md:block">Message</p>
        </div>
        <div className="flex items-center gap-4 px-4 py-4 transition-colors duration-300 rounded-xl hover:bg-red-300 hover:cursor-pointer">
          <MdExplore className="size-6 md:size-6" color="grey" />
          <p className="hidden text-xl text-gray-600 md:block">Explore</p>
        </div>
        <div className="flex items-center gap-4 px-4 py-4 transition-colors duration-300 rounded-xl hover:bg-red-300 hover:cursor-pointer">
          <FaVideo className="size-6 md:size-6" color="grey" />
          <p className="hidden text-xl text-gray-600 md:block">Live</p>
        </div>
        <div className="flex items-center gap-4 px-4 py-4 transition-colors duration-300 rounded-xl hover:bg-red-300 hover:cursor-pointer">
          <BsFillSave2Fill className="size-6 md:size-6" color="grey" />
          <p className="hidden text-xl text-gray-600 md:block">Saved</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
