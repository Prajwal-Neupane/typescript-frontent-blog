import { FaCircleDot } from "react-icons/fa6";
// import { IoIosNotifications } from "react-icons/io";
// import { FaSearch, FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../services/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const dispatch = useDispatch();
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
  const handleLogOut = () => {
    dispatch(logOut());
    toast.success("Logged Out successfully");
  };
  return (
    <div className="mx-auto max-w-[1550px] py-5 px-5 flex gap-5 justify-between border-b-gray-300 border-b-2 items-center">
      <div className="flex items-center gap-3">
        <FaCircleDot size={40} color="#C70039" />
        <h1 className="xl:text-5xl text-4xl font-semibold text-[#Fe0000]">
          Dot.X
        </h1>
      </div>
      <div className="w-[50%] flex px-4 py-3 items-center gap-4 border-2 border-gray-200 justify-between rounded-full">
        <CiSearch size={25} color="" />
        <input
          className="w-full text-xl outline-none"
          placeholder="Search now..."
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="items-center hidden gap-8 xl:gap-16 md:flex ">
        <IoMdNotificationsOutline
          size={30}
          className="px-1 border-2 border-gray-400 rounded-full"
        />

        <div className="flex items-center gap-4">
          <CiUser
            onClick={() => setPopUp(!popUp)}
            size={30}
            className="px-1 border-2 border-gray-400 rounded-full hover:cursor-pointer"
          />
          {popUp && (
            <div
              ef={popUpRef}
              className="absolute z-30 flex flex-col px-8 py-4 text-center transition-all duration-300 rounded-md shadow-2xl bg-primary/30 right-5 top-24 "
            >
              <Link
                className="text-2xl font-semibold hover:underline"
                to={"/profile"}
              >
                Profile
              </Link>
              <button
                onClick={handleLogOut}
                className="px-3 py-4 mt-4 text-xl text-white transition-all duration-300 rounded-md bg-primary hover:bg-secondary"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex md:hidden">
        <FaBarsStaggered size={30} />
      </div>
    </div>
  );
};

export default Navbar;
