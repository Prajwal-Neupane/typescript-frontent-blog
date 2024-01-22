import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mx-auto max-w-[1550px]">
        <Sidebar />
      </div>
    </div>
  );
};

export default UserProfile;
