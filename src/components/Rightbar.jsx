import ProfileCard from "./ProfileCard";

const Rightbar = () => {
  return (
    <div className="hidden md:px-5 w-[26%]    pt-5 border-l-2 border-gray-200 lg:flex flex-col  gap-4 items-center">
      <ProfileCard />
    </div>
  );
};

export default Rightbar;
