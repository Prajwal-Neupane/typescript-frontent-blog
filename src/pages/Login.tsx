import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
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
            <p className="text-xl">Username *</p>
            <input
              className="py-2 text-xl border-b-2 border-gray-300 outline-none "
              type="text"
              name="username"
              placeholder="Username"
              id=""
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl">Password</p>
            <div className="flex items-center pr-5 border-b-2 border-gray-300 ">
              <input
                className="w-full py-2 mr-5 text-xl outline-none "
                type={`${viewPassword ? "text" : "password"}`}
                name="password1"
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
        <button className="w-full py-4 mt-5 text-xl font-semibold text-center text-white transition-colors duration-300 bg-secondary hover:bg-hover hover:cursor-pointer rounded-xl">
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
