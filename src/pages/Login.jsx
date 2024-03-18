import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../services/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    if (!data.email || !data.password) {
      toast.error("Fields are required");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        data
      );
      dispatch(setToken(response.data));
      toast.success("Logged In Successfully");
      navigate("/");
    } catch (error) {
      toast.error("Error occured");
      // toast.error(error.response.data.message);
    }
  };
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <div className="max-w-[800px] mx-auto bg-primary h-[100vh] py-8 flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl font-semibold text-white">Dot.X</h1>
        <p className="text-xl font-semibold text-white">Be Connected</p>
      </div>
      <div className="w-full px-8 py-6 md:w-[60%] bg-white rounded-3xl">
        <h1 className="text-4xl text-center">Login</h1>
        <div className="flex flex-col gap-5 mt-8 font-['Roboto'] ">
          <div className="flex flex-col gap-2">
            <p className="text-xl">Email *</p>
            <input
              onChange={handleChange}
              className="py-2 text-xl border-b-2 border-gray-300 outline-none "
              type="email"
              name="email"
              placeholder="Email"
              id=""
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl">Password</p>
            <div className="flex items-center pr-5 border-b-2 border-gray-300 ">
              <input
                onChange={handleChange}
                className="w-full py-2 mr-5 text-xl outline-none "
                type={`${viewPassword ? "text" : "password"}`}
                name="password"
                placeholder="********"
                id=""
              />
              {viewPassword ? (
                <FaEyeSlash
                  className="hover:cursor-pointer"
                  onClick={() => setViewPassword(!viewPassword)}
                  size={20}
                />
              ) : (
                <FaEye
                  className="hover:cursor-pointer"
                  onClick={() => setViewPassword(!viewPassword)}
                  size={20}
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-4 mt-5 text-xl font-semibold text-center text-white transition-colors duration-300 bg-secondary hover:bg-hover hover:cursor-pointer rounded-xl"
        >
          Login
        </button>
        <p className="mt-5 text-center text-[16px]">
          Don't have an account?{" "}
          <Link className="font-semibold" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
