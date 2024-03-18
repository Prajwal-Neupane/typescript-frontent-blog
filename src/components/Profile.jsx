import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import axios from "axios";
import Post from "./Post";

const Profile = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [data, setData] = useState();
  const [posts, setPosts] = useState();

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
  }, [accessToken]);

  useEffect(() => {
    const fetchAllUserBlogs = async () => {
      const response = await axios.get("http://localhost:3001/api/userblogs", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setPosts(response.data);
    };
    fetchAllUserBlogs();
  }, [accessToken]);

  return (
    <div>
      <Navbar />
      <div className="flex mx-auto max-w-[1550px]    ">
        <Sidebar />
        {data && (
          <div className="container h-[100vh] overflow-scroll py-5 px-5 flex flex-col w-[80%] mx-auto">
            <div className="flex flex-col items-center gap-5 md:gap-20 md:flex-row">
              <div className="">
                <img
                  src={data.profilePic}
                  alt="profile"
                  className="rounded-full h-[150px] w-[150px] shadow-2xl shadow-primary"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{data.fullName}</h1>
                <p className="text-xl font-semibold text-gray-700 ">
                  {data.email}
                </p>
                <div className="flex gap-16 mt-8">
                  <p className="md:text-xl text-[1.1rem] font-semibold">
                    <span className="font-bold ">{posts && posts.length}</span>
                    &nbsp; posts
                  </p>
                  <p className="md:text-xl text-[1.1rem] font-semibold ">
                    <span className="font-bold">{data.followers.length}</span>
                    &nbsp; followers
                  </p>
                  <p className="md:text-xl text-[1.1rem] font-semibold">
                    <span className="font-bold">{data.following.length}</span>
                    &nbsp; following
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <p className="text-xl font-semibold text-gray-700 ">
                    @{data.username}
                  </p>
                  <p className="text-xl font-semibold">A web developer</p>
                </div>
              </div>
            </div>
            <div className="w-[100%] mt-5">
              <h1 className="text-2xl font-bold text-center">Posts</h1>
              <div className="flex-col w-full md:w-[80%] mx-auto">
                {posts && posts.length > 0 ? (
                  posts.map((post) => <Post key={post._id} post={post} />)
                ) : (
                  <div className="mt-8">
                    <h1 className="text-xl font-semibold text-center">
                      No Posts Available
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
