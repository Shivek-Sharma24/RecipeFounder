import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { context } from "../context/ContextApi";

const Login = () => {
  const { LoginAPI, loading } = useContext(context);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [passwordEye, setPasswordEye] = useState(false);

  function handlechange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    LoginAPI(inputs);
  }

  return (
    <>
      <div className="py-16 p-3">
        <div className="flex-col lg:flex lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-5xl">
          <div className=" lg:w-1/2 bg-cover">
            <img
              className="overflow-hidden h-full w-full object-cover"
              src="https://img.freepik.com/free-vector/online-courses-concept_23-2148533717.jpg?ga=GA1.1.950671070.1749485799&semt=ais_hybrid&w=740"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              RecipeFounder
            </h2>
            <p className="text-lg text-gray-600 text-center">Welcome back!</p>

            <div className="mt-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                name="email"
                onChange={handlechange}
                value={inputs.email}
              />
            </div>
            <div className="mt-4 relative">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type={`${passwordEye ? "text" : "password"}`}
                name="password"
                onChange={handlechange}
                value={inputs.password}
              />
              <button
                onClick={() => setPasswordEye((prev) => !prev)}
                className={` text-black absolute top-[50%] left-[88%] sm:left-[90%] lg:left-[92%] `}
              >
                <i
                  className={`fa-solid  ${
                    passwordEye ? "fa-eye" : "fa-eye-slash"
                  }`}
                ></i>
              </button>
            </div>
            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className={
                  "bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                }
                disabled={loading}
              >
                Login{loading ? "Logging in..." : "Login"}
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link to="/register" className="text-xs text-gray-500 uppercase">
                or Signup
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Login);
