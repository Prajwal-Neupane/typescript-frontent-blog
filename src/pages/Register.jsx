import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [passwordView1, setPasswordView1] = useState(false);
  const [passwordView2, setPasswordView2] = useState(false);
  return (
    <div className="max-w-[800px] mx-auto bg-primary h-full py-8 flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl font-semibold text-white">Dot.X</h1>
        <p className="text-xl font-semibold text-white">Be Connected</p>
      </div>
      <div className="w-full px-8 py-6 md:w-[60%] bg-white rounded-3xl">
        <h1 className="text-4xl text-center">Create an account</h1>
        <div className="flex flex-col gap-5 mt-8 font-['Roboto'] ">
          <div className="flex flex-col gap-2">
            <p className="text-xl">Full Name *</p>
            <input
              autoComplete="off"
              className="py-2 text-xl border-b-2 border-gray-300 outline-none "
              type="text"
              name="full_name"
              placeholder="Name Surname"
              id=""
            />
          </div>
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
            <p className="text-xl"> E-mail</p>
            <input
              className="py-2 text-xl border-b-2 border-gray-300 outline-none "
              type="email"
              name="email"
              placeholder="email@email.com"
              id=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl">Password</p>
            <div className="flex items-center pr-5 border-b-2 border-gray-300 ">
              <input
                className="w-full py-2 mr-5 text-xl outline-none "
                type={`${passwordView1 ? "text" : "password"}`}
                name="password1"
                placeholder="********"
                id=""
              />
              {passwordView1 ? (
                <FaEyeSlash
                  className="hover:cursor-pointer"
                  onClick={() => setPasswordView1(!passwordView1)}
                  size={20}
                />
              ) : (
                <FaEye
                  className="hover:cursor-pointer"
                  onClick={() => setPasswordView1(!passwordView1)}
                  size={20}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl">Confirm Password</p>
            <div className="flex items-center pr-5 border-b-2 border-gray-300 ">
              <input
                className="w-full py-2 mr-5 text-xl outline-none "
                type={`${passwordView2 ? "text" : "password"}`}
                name="password2"
                placeholder="********"
                id=""
              />
              {passwordView2 ? (
                <FaEyeSlash
                  className="hover:cursor-pointer"
                  onClick={() => setPasswordView2(!passwordView2)}
                  size={20}
                />
              ) : (
                <FaEye
                  className="hover:cursor-pointer"
                  onClick={() => setPasswordView2(!passwordView2)}
                  size={20}
                />
              )}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-5 text-xl">
            <input
              className="size-5"
              type="checkbox"
              name="Terms and Conditions"
              id=""
            />
            <p>I accept the Terms and Conditions</p>
          </div>
        </div>
        <button className="w-full py-4 mt-5 text-xl font-semibold text-center text-white transition-colors duration-300 bg-secondary hover:bg-hover hover:cursor-pointer rounded-xl">
          Register
        </button>
        <p className="mt-5 text-center text-[16px]">
          Already have an account?{" "}
          <Link className="font-semibold" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
