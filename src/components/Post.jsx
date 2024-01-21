import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { GoCommentDiscussion } from "react-icons/go";
import { CiLocationArrow1 } from "react-icons/ci";

const Post = () => {
  const [like, setLike] = useState(false);
  return (
    <div className="flex flex-col gap-3 px-5 pt-5 pb-4 border-b-2 border-gray-200 md:px-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/256/4333/4333609.png"
            className="size-12"
            alt=""
          />
          <div>
            <h1 className="text-xl font-semibold">Prajwal Neupane</h1>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-[12px] text-gray-600 font-semibold ">
                @laZorPlayz
              </p>
              <GoDotFill size={8} />
              <p className="text-[12px] text-gray-600 font-semibold">
                1 Hours Ago
              </p>
            </div>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical size={20} />
        </div>
      </div>

      {/* Div for Texts */}
      <div>
        <h1 className="text-[1.2rem] font-['Roboto'] text-justify leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          debitis dolore ut, vitae nihil pariatur aliquam illo iusto animi sed.
          Magnam veritatis eos cum vero dolores facere et, possimus dolorem
          ratione exercitationem blanditiis iure voluptatem aut eligendi nobis
          maxime fugit beatae dignissimos molestiae tempore excepturi similique
          aliquam ipsam dolor! Perspiciatis.
        </h1>
      </div>

      {/* Div for Hashtags */}
      <div className="flex gap-2 mt-2">
        <p className="text-[1.2rem] font-semibold text-blue-900 ">#travel</p>
        <p className="text-[1.2rem] font-semibold text-blue-900 ">#fun</p>
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
      <div className="flex justify-between mt-3 ">
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
              <p className="font-semibold text-primary">1.8 K</p>
            ) : (
              <p className="font-semibold">1.8 K</p>
            )}
          </div>
          {/* Div for comment */}
          <div className="flex gap-4">
            <GoCommentDiscussion size={20} />
            <p className="font-semibold ">1.1 K</p>
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
