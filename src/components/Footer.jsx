import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <>
      <footer className="footer text-white pt-12 pb-8 px-4">
        <div className="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
          <Link to="/" className="flex items-center mr-4 w-1/3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1869/1869042.png"
              alt="Logo"
              className="h-10 w-auto "
            />
            <p className="md:text-2xl text-lg font-serif text-white font-bold mt-0  hover:opacity-80">
              RecipeFounder{" "}
            </p>
          </Link>
          <div className="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
              <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
                Company
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-gray-400 hover:text-white no-underline"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-gray-400 hover:text-white no-underline"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
              <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
                Developers
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-gray-400 hover:text-white no-underline"
                >
                  Developer API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-gray-400 hover:text-white no-underline"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-3 text-gray-400 hover:text-white no-underline"
                >
                  Guides
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-4 mt-4 pt-6 text-gray-500 border-t border-gray-800 text-center">
          {" "}
          © 2025 RecipeFounder. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default React.memo(Footer);
