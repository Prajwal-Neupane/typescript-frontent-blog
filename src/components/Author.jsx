import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import axios from "axios";

export const Author = ({ author, createdAt }) => {
  const [user, setUser] = useState();
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/user/getUser/${author}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken && accessToken}`,
          },
        }
      );
      console.log(response.data);
      setUser(response.data);
    };
    fetchUser();
  }, []);
  return (
    <>
      <img
        src={user && user.profilePic}
        className="rounded-full size-12"
        alt=""
      />
      <div>
        <h1 className="text-xl font-semibold">{user && user.fullName}</h1>
        <div className="flex items-center gap-3 mt-1">
          <p className="text-[12px] text-gray-600 font-semibold ">
            @{user && user.username}
          </p>
          <GoDotFill size={8} />
          <p className="text-[12px] text-gray-600 font-semibold">{createdAt}</p>
        </div>
      </div>
    </>
  );
};
