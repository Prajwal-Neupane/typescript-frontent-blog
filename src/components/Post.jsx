import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { GoCommentDiscussion } from "react-icons/go";
import { CiLocationArrow1 } from "react-icons/ci";
import { Author } from "./Author";

const Post = ({ posts }) => {
  const [like, setLike] = useState(false);
  const dateObject = new Date(posts.createdAt);
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = dateObject.toLocaleString("en-US", options);
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
        <div>
          <BsThreeDotsVertical size={20} />
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
          posts.hashtags.map((hashtag, index) => {
            <p
              key={index}
              className="text-[1.2rem] font-semibold text-blue-900 "
            >
              #{hashtag}
            </p>;
          })}
      </div>

      {/* Div for Image */}

      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1672109350982-d29f8619e066?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover w-full h-[500px] rounded-md"
          alt=""
        />
      </div>
      {/* Div for like, comment and share icons */}
      <div className="flex justify-between pb-6 mt-3 ">
        {/* Div for like and comment */}
        <div className="flex gap-10">
          {/* Div for like */}
          <div onClick={() => setLike(!like)} className="flex gap-4">
            {like ? (
              <FaHeart color="red" size={20} />
            ) : (
              <FaRegHeart size={20} />
            )}
            {like ? (
              <p className="font-semibold text-primary">{posts.likes.length}</p>
            ) : (
              <p className="font-semibold">{posts.likes.length}</p>
            )}
          </div>
          {/* Div for comment */}
          <div className="flex gap-4">
            <GoCommentDiscussion size={20} />
            <p className="font-semibold ">{posts.comments.length}</p>
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
