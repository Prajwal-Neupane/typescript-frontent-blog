import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [user, setUser] = useState();
  const [adminId, setAdminId] = useState();
  const [followed, setFollowed] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/user/getuser/${id}`
      );
      setUser(response.data);
    };
    fetchUser();
    const fetchAdminId = async () => {
      const response = await axios.get("http://localhost:3001/api/user/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setAdminId(response.data._id);
    };
    fetchAdminId();
  }, [adminId, followed, accessToken, id]);
  // console.log(followed);
  useEffect(() => {
    if (user && adminId) {
      if (user.followers.includes(adminId)) {
        // console.log(user.followers);
        // console.log(user.followers);
        setFollowed(true);
      } else {
        setFollowed(false);
        // console.log(user.followers);
        // console.log(user.followers);
      }
    }
  }, [adminId, followed, accessToken, id, user]);
  // user && console.log(user._id);
  // user && console.log(user);
  // adminId && console.log(adminId);

  const handleFollow = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/user/follow/${user._id}`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      setFollowed((followed) => !followed);
      toast.success("User followed");
    } catch (error) {
      console.log("Error in following", error);
    }
  };
  const handleUnFollow = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/user/unfollow/${user._id}`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      toast.success("User unfollowed");
      setFollowed((followed) => !followed);
    } catch (error) {
      console.log("Error in unfollowing", error);
    }
  };
  // console.log(user);
  // adminId && user && adminId === user._id && console.log("User is the admin");
  return (
    <div>
      <Navbar />
      <div className="flex mx-auto max-w-[1550px]">
        <Sidebar />
        {user && (
          <div className="container h-[100vh] overflow-scroll py-5 px-5 flex flex-col w-[80%] mx-auto">
            <div className="flex flex-col items-center gap-5 md:gap-20 md:flex-row">
              <div className="">
                <img
                  src={user.profilePic}
                  alt="profile"
                  className="rounded-full h-[150px] w-[150px] shadow-2xl shadow-primary"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-3xl font-bold">{user.fullName}</h1>
                <p className="text-xl font-semibold text-gray-700 ">
                  {user.email}
                </p>
                <div className="flex gap-16 ">
                  <p className="md:text-xl text-[1.1rem] font-semibold">
                    <span className="font-bold ">{user && user.length}</span>
                    &nbsp; posts
                  </p>
                  <p className="md:text-xl text-[1.1rem] font-semibold ">
                    <span className="font-bold">
                      {user && user.followers.length}
                    </span>
                    &nbsp; followers
                  </p>
                  <p className="md:text-xl text-[1.1rem] font-semibold">
                    <span className="font-bold">
                      {user && user.following.length}
                    </span>
                    &nbsp; following
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <p className="text-xl font-semibold text-gray-700 ">
                    @{user.username}
                  </p>
                  <p className="text-xl font-semibold">A web developer</p>
                </div>
                {adminId &&
                  user &&
                  adminId === user._id &&
                  navigate("/profile")}
                <div className="">
                  {followed ? (
                    <button
                      onClick={handleUnFollow}
                      className="px-3 py-3 text-xl font-semibold text-white rounded-lg bg-secondary "
                    >
                      UnFollow
                    </button>
                  ) : (
                    <button
                      onClick={handleFollow}
                      className="px-3 py-3 text-xl font-semibold text-white rounded-lg bg-primary "
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="w-[100%] mt-5">
              <h1 className="text-2xl font-bold text-center">Posts</h1>
              <div className="flex-col w-full md:w-[80%] mx-auto">
                {users && posts.length > 1 ? (
                  posts.map((post) => <Post key={post._id} posts={post} />)
                ) : (
                  <div className="mt-8">
                    <h1 className="text-xl font-semibold text-center">
                      No Posts Available
                    </h1>
                  </div>
                )}
              </div>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
