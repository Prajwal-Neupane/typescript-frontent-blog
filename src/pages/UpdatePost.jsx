import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";

import { MdDelete } from "react-icons/md";

const UpdatePost = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [hashtagInput, setHashtagInput] = useState();
  const [hashtags, sethashtags] = useState([]);
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchUpdatePost = async () => {
      const response = await axios.get(`http://localhost:3001/api/blog/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setContent(response.data.content);
      sethashtags(response.data.hashtags);
    };
    fetchUpdatePost();
  }, []);

  const handleLink = (e) => {
    e.preventDefault();
    if (hashtagInput.trim() !== "") {
      sethashtags([...hashtags, hashtagInput]);
      setHashtagInput("");
    }
  };
  const handleLinkChange = (e) => {
    setHashtagInput(e.target.value);
  };

  const handleLinkDelete = (id) => {
    const updatedLinks = [...hashtags];
    updatedLinks.splice(id, 1);
    sethashtags(updatedLinks);
  };
  const handleSubmit = async () => {
    if (!content) {
      toast.error("Content is required");
      return;
    }
    console.log({ content, hashtags });
    try {
      await axios.put(
        `http://localhost:3001/api/blog/${id}`,
        { content, hashtags },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      navigate("/");
      toast.success("Post updated successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex mx-auto max-w-[1550px]">
        <Sidebar />
        <div className="xl:w-[60%] mx-auto px-5 py-5">
          <textarea
            className="w-full px-4 py-4 border-2 border-gray-700 rounded-md outline-none"
            name="content"
            placeholder="Enter here something..."
            rows={12}
            cols={30}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex flex-col gap-0 mt-5">
            {hashtags && hashtags.length > 0
              ? hashtags.map((link, index) => (
                  <div
                    className="flex items-center gap-1 mt-3 md:text-xl"
                    key={index}
                  >
                    {/* <RiLinksFill className="font-semibold transition-all text-dark hover:underline hover:cursor-pointer hover:scale-y-105" /> */}
                    <p>#</p>
                    <Link
                      href={link}
                      className="max-w-full overflow-hidden font-semibold text-dark hover:underline hover:cursor-pointer hover:scale-y-105 text-ellipsis"
                    >
                      {link}
                    </Link>
                    <MdDelete
                      onClick={() => handleLinkDelete(index)}
                      color="red"
                      size={25}
                      className="ml-6 font-semibold text-right text-dark hover:underline hover:cursor-pointer hover:scale-y-105"
                    />
                  </div>
                ))
              : ""}
          </div>
          <div className="flex xl:w-[60%] gap-6 mt-4 ">
            <input
              onChange={handleLinkChange}
              name="links"
              value={hashtagInput}
              type="text"
              placeholder="#"
              className="w-full px-3 py-4 text-xl border rounded-md outline-none border-slate-400"
            />
            <button
              onClick={handleLink}
              className="font-semibold rounded-md bg-[#365486] justify-center text-white text-xl flex gap-3 items-center px-2 py-2 w-[20%]"
            >
              <IoMdAdd size={30} /> Add
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="px-4 py-4 mt-5 text-xl font-semibold text-white rounded-xl bg-primary"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
