import React from "react";

const Rightbar = () => {
  return (
    <div className="md:px-5 w-[15%] mxau md:w-[30%] pt-5 border-l-2 border-gray-200 flex flex-col  gap-4 items-center">
      <div className="relative container h-[50%] w-[80%] mt-16 bg-red-300 rounded-xl items-center flex flex-col gap-4">
        <img
          className="relative object-cover rounded-full -top-10 w-28 h-28"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
        />
        <h1 className="relative text-3xl font-semibold text-center -top-10">
          Prajwal Neupane
        </h1>
        <p className="relative text-xl text-center -top-12 ">A web developer</p>
        <div className="relative flex gap-10 -top-10 ">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-xl font-semibold">Followers</h1>
            <p className="text-center">12</p>
          </div>
          <div className="border-l-2 border-black"></div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Following</h1>
            <p className="text-center">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
