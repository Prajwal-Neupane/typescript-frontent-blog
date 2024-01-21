import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get("http://localhost:3001/api/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken && accessToken}`,
        },
      });
      setData(response.data);
    };
    fetchUserData();
  }, []);
  return (
    <div className="relative container h-fit w-[100%] xl:w-[80%] pb-5 mt-16 border-gray-300 border-2 rounded-xl items-center flex flex-col gap-4 shadow-xl shadow-red-300">
      <img
        className="relative object-cover rounded-full -top-10 w-28 h-28"
        src={data && data.profilePic}
        alt="profile"
      />
      <h1 className="relative text-3xl font-semibold text-center -top-10">
        {data && data.username}
      </h1>
      <p className="relative text-xl text-center -top-12 ">A web developer</p>
      <hr className="relative w-full border-2 border-gray-300 -top-10" />
      <div className="relative flex gap-5 -top-10 ">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[1.3rem] font-semibold">Followers</h1>
          <p className="text-xl text-center">{data && data.followers.length}</p>
        </div>
        <div className="border-l-2 border-black"></div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[1.3rem] font-semibold">Following</h1>
          <p className="text-xl text-center">{data && data.following.length}</p>
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
      <Link
        to={"/profile"}
        className="relative px-3 py-3 font-semibold text-white transition-all duration-300 rounded-full bg-primary hover:bg-secondary"
      >
        View Profile
      </Link>
    </div>
  );
};

export default ProfileCard;
