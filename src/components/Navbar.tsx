import { FaCircleDot } from "react-icons/fa6";
// import { IoIosNotifications } from "react-icons/io";
// import { FaSearch, FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-[1400px] py-5 px-5 flex gap-5 justify-between border-b-gray-500 border-b-2 items-center">
      <div className="flex items-center gap-3">
        <FaCircleDot size={40} color="#C70039" />
        <h1 className="text-5xl font-semibold text-[#Fe0000]">Dot.X</h1>
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
      <div className="flex items-center gap-5 ">
        <IoMdNotificationsOutline
          size={30}
          className="px-1 border-2 border-gray-400 rounded-full"
        />
        <div className="flex items-center gap-4">
          <CiUser
            size={30}
            className="px-1 border-2 border-gray-400 rounded-full"
          />
          <p className="text-xl font-semibold ">{"Prajwal Neupane"}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
