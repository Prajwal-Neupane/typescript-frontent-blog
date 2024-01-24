import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { GoCommentDiscussion } from "react-icons/go";
import { CiLocationArrow1 } from "react-icons/ci";
import { Author } from "./Author";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useJwt } from "react-jwt";
import axios from "axios";

const Post = ({ post }) => {
  const [posts, setPosts] = useState(post);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [like, setLike] = useState(false);
  const [comments, setComments] = useState(posts.comments);
  const [showComments, setShowComments] = useState(false);
  const { decodedToken, isExpired } = useJwt(accessToken);

  const popUpRef = useRef(null);
  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popUpRef.current && !popUpRef.current.contains(e.target)) {
        setPopUp(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    if (!popUp) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [popUp]);
  useEffect(() => {
    if (decodedToken) {
      setLike(posts.likes.includes(decodedToken.id));
    }
  }, [decodedToken, posts.likes]);
  const dateObject = new Date(posts.createdAt);
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = dateObject.toLocaleString("en-US", options);
  const handleDeleteConfirmation = (id) => {
    toast((t) => (
      <span className="text-xl">
        Confirm to delete? &nbsp;&nbsp;
        <button
          className="px-2 py-2 font-semibold text-white bg-red-700 rounded-xl"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </span>
    ));
  };
  const handleDelete = (id) => {
    console.log(id);
    toast.dismiss();
  };
  const handleLike = async () => {
    setLike(() => true);
    await axios.put(
      `http://localhost:3001/api/like/${posts._id}`,
      {},
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    const updatedPost = await axios.get(
      `http://localhost:3001/api/blog/${posts._id}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    setPosts(updatedPost.data);
  };
  const handleDisLike = async () => {
    setLike(() => false);
    await axios.put(
      `http://localhost:3001/api/like/${posts._id}`,
      {},
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    const updatedPost = await axios.get(
      `http://localhost:3001/api/blog/${posts._id}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    setPosts(updatedPost.data);
  };

  return (
    <div className="flex flex-col gap-3 px-5 pt-5 pb-4 border-b-2 border-gray-200 md:px-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          {/* <div>
            <h1 className="text-xl font-semibold">Prajwal Neupane</h1>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-[12px] text-gray-600 font-semibold ">
                @laZorPlayz
              </p>
              <GoDotFill size={8} />
              <p className="text-[12px] text-gray-600 font-semibold">
                {posts.createdAt}
              </p>
            </div>
          </div> */}
          <Author createdAt={formattedDate} author={posts.author} />
        </div>

        <div className="relative">
          <BsThreeDotsVertical onClick={() => setPopUp(!popUp)} size={20} />
          {popUp && decodedToken && posts.author === decodedToken.id && (
            <div
              ef={popUpRef}
              className="absolute z-30 flex flex-col px-3 py-2 text-center transition-all duration-300 bg-gray-400 rounded-md shadow-2xl right-5 top-8 "
            >
              <Link
                className="mt-1 text-xl font-semibold transition-all duration-300 rounded-md hover:underline"
                to={`/edit/${posts._id}`}
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeleteConfirmation(posts._id)}
                className="mt-1 text-xl font-semibold transition-all duration-300 rounded-md "
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Div for Texts */}
      <div>
        <h1 className="text-[1.2rem] font-['Roboto'] text-justify leading-6">
          {posts.content}
        </h1>
      </div>

      {/* Div for Hashtags */}
      <div className="flex gap-2 mt-2">
        {posts.hashtags &&
          posts.hashtags.map((hashtag, index) => (
            <p
              key={index}
              className="text-[1.2rem] font-semibold text-blue-900 "
            >
              #{hashtag}
            </p>
          ))}
      </div>

      {/* Div for Image */}

      <div>
        {posts.thumbnail && (
          <img
            src={posts.thumbnail}
            className="object-cover w-full h-[500px] rounded-md"
            alt=""
          />
        )}
      </div>
      {/* Div for like, comment and share icons */}
      <div className="flex justify-between pb-6 mt-3 ">
        {/* Div for like and comment */}
        <div className="flex gap-10">
          {/* Div for like */}
          <div className="flex gap-4">
            {like ? (
              <FaHeart onClick={handleDisLike} color="red" size={20} />
            ) : (
              <FaRegHeart onClick={handleLike} size={20} />
            )}
            {like ? (
              <p className="font-semibold text-primary">{posts.likes.length}</p>
            ) : (
              <p className="font-semibold">{posts.likes.length}</p>
            )}
          </div>
          {/* Div for comment */}
          <div className="flex gap-4">
            <GoCommentDiscussion
              onClick={() => setShowComments(!showComments)}
              size={20}
            />
            <p className="font-semibold ">{posts.comments.length}</p>
          </div>
          <div className="inline-block">
            {showComments &&
              comments.map((comment) => {
                <div key={comments._id}>
                  {" "}
                  <h1>{comment.comment}</h1>{" "}
                </div>;
              })}
          </div>
        </div>
        {/* div for share */}
        <div className="flex gap-2">
          <CiLocationArrow1 size={20} />
          <p className="font-semibold ">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
