import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { MdExplore } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { BsFillSave2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoIosAddCircle } from "react-icons/io";

const Sidebar = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await axios.get(
        "http://localhost:3001/api/user/allusers"
      );
      setUsers(response.data);
    };
    fetchAllUsers();
  }, []);

  return (
    <div className=" md:px-5 w-[15%] md:w-[15%] pt-5 border-r-2 border-gray-200 ">
      <div className="flex flex-col gap-4 pb-4 border-b-2 border-gray-200">
        <Link
          to={"/"}
          className="flex items-center gap-4 px-4 py-4 transition-colors duration-300 rounded-xl hover:bg-red-300 hover:cursor-pointer"
        >
          <AiFillHome className="size-6 md:size-6" color="grey" />
          <p className="hidden text-xl text-gray-600 md:block">Home</p>
        </Link>
        <div className="flex items-center gap-4 px-4 py-4 transition-colors duration-300 rounded-xl hover:bg-red-300 hover:cursor-pointer">
          <FaMessage className="size-6 md:size-6" color="grey" />
          <p className="hidden text-xl text-gray-600 md:block">Message</p>
        </div>
        <div className="transition-colors duration-300 rounded-xl hover:cursor-pointer">
          <Link to={"/create"} className=" bottom-0 right-[0rem]">
            <IoIosAddCircle size={60} className="rounded-full bg-primary" />
          </Link>
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
      <h1 className="mt-6 text-xl font-semibold">Users</h1>
      <div className="flex flex-col gap-5 mt-4">
        {users &&
          users.map((user) => {
            return (
              <div key={user._id} className="flex gap-3 px-2 ">
                <img
                  src={user.profilePic}
                  alt=""
                  className="h-[30px] w-[30px] rounded-full"
                />
                <Link
                  to={`/user/${user._id}`}
                  className="hidden text-xl font-semibold text-gray-700 md:flex hover:cursor-pointer hover:underline"
                >
                  {user.fullName}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
