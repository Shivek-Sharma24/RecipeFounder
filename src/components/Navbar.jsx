import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { context } from "../context/ContextApi";
import toast from "react-hot-toast";
import React from "react";

const Navbar = () => {
  const { displayRecipe } = useContext(context);
  let [searchData, SetSearchData] = useState("");
  const [menu, setMenu] = useState(false);
  const [SuggestionRecipe, setSuggestionRecipe] = useState([]);
  const [error, setError] = useState(false);
  const boxref = useRef(null);
  const searchref = useRef(null);
  let location = useLocation();
  const token = localStorage.getItem("token");

  // function that close the suggestion box if user click outside
  function handleOutsideClick(event) {
    if (
      boxref.current &&
      !boxref.current.contains(event.target) &&
      searchref.current &&
      !searchref.current.contains(event.target)
    ) {
      SetSearchData("");
    }
  }

  function handlechange(value) {
    SetSearchData(value);
    handleSuggestion(value);
    setError(false);
  }
  // handle each li element value
  function handlelist(value) {
    SetSearchData(value);
    displayRecipe(value);
    setError(false);
  }

  // fetching suggestions
  async function handleSuggestion(query) {
    console.log("query", query);

    try {
      let response = await axios.get(`https://dummyjson.com/recipes`);
      const result = response.data.recipes.filter((item) => {
        return (
          query && item && item.name && item.name.toLowerCase().includes(query)
        );
      });
      if (result.length > 0) {
        setSuggestionRecipe(result);
        console.log(SuggestionRecipe);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log("Suggestion function error", error);
    }
  }

  function menuHandler() {
    setMenu((prev) => !prev);
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    const mediaQuery = window.matchMedia("(min-width: 768px)"); // md in Tailwind

    const handleScreenChange = (e) => {
      if (e.matches) {
        setMenu(false);
      }
    };

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  });

  function handleLogout() {
    localStorage.clear();
    toast.success("Logout Successfully");
    setTimeout(() => {
      window.location.assign("/");
    }, 500);
  }

  return (
    <>
      <nav className="navbar  border-gray-200 w-full fixed z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}

            <button
              onClick={() => window.location.assign("/")}
              className="flex items-center"
            >
              <img
                // src="../public/image/food-recipelogo (1).png"
                src="https://cdn-icons-png.flaticon.com/512/1869/1869042.png"
                alt="Logo"
                className="h-10 w-auto"
              />
              <p className="md:text-2xl text-lg font-serif transition duration-500 ease-in-out text-green-800 font-bold mt-0  hover:text-white">
                RecipeFounder{" "}
              </p>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-2 items-center justify-between">
              {/* Search Bar */}
              <div
                className={`${
                  location.pathname === "/" ? "block relative w-72 " : "hidden"
                }`}
              >
                <input
                  ref={searchref}
                  type="text"
                  onChange={(e) => handlechange(e.target.value)}
                  value={searchData}
                  className="block w-full focus:outline-none border text-black rounded-md border-gray-300 shadow-sm pl-3 pr-3 py-1"
                  placeholder="Search..."
                />
                {/* Suggestions Dropdown */}

                {SuggestionRecipe && searchData ? (
                  <ul
                    ref={boxref}
                    className={`absolute z-999 w-full text-white bg-transparent scrollbar backdrop-blur-lg shadow-lg mt-1 rounded-md border border-gray-100 max-h-40 ${
                      !error ? "overflow-y-scroll" : "overflow-hidden"
                    }`}
                  >
                    {!error ? (
                      SuggestionRecipe.map((item) => {
                        return (
                          <li
                            className="px-4 py-2 text-white font-semibold opacity-70  cursor-pointer hover:bg-gray-100 hover:text-black"
                            key={item.id}
                            onClick={() => handlelist(item.name)}
                          >
                            {item.name}
                          </li>
                        );
                      })
                    ) : (
                      <li className="text-red-600 font-semibold p-2 ">
                        No Recipe Found
                      </li>
                    )}
                  </ul>
                ) : null}
              </div>
              {/* Select Bar */}
              {location.pathname === "/" ? null : (
                <Link
                  to={"/"}
                  className="block p-1 text-lg ml-4 hover:text-white transition duration-500 ease-in-out cursor-pointer text-gray-700 focus:outline-none "
                >
                  Home
                </Link>
              )}
              {token ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white p-2 border ml-4 rounded-md text-sm hover:bg-red-600"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to={"/register"}
                  className={`p-1  hover:text-white rounded text-gray-700 text-lg ml-4 transition duration-500 ease-in-out  cursor-pointer focus:outline-none overflow-hidden`}
                >
                  SignIn
                </Link>
              )}

              <Link
                to={"/cart"}
                className="ml-4 p-2 rounded-full  transition duration-500 ease-in-out hover:bg-gray-200"
                aria-label="Favorite"
              >
                {" "}
                <i className="fas fa-heart fa-2x text-red-500  mx-2 hover:text-red-700 "></i>{" "}
              </Link>
            </div>

            {/* Mobile Menu Button and mobile nav start*/}
            <div className="flex md:hidden ">
              <button
                onClick={menuHandler}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 "
                aria-controls="mobile-menu"
                aria-expanded={menu}
              >
                {/* Hamburger Icon */}
                <i className="fas fa-bars fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu accordion */}
        <div
          className={`md:hidden bg-transparent transition-all overflow-hidden  border-b border-gray-200 ${
            menu ? "max-h-96" : "max-h-0"
          } duration-300 ease-in-out`}
        >
          <div className="px-4 pt-4 pb-2 flex flex-col gap-2">
            {/* Search Bar */}
            <div className="relative w-full">
              <input
                type="text"
                onChange={(e) => handlechange(e.target.value)}
                value={searchData}
                className="block w-full border-2  rounded-md focus:outline-none text-black  shadow-sm  pl-3 pr-3 py-2"
                placeholder="Search..."
              />
              {SuggestionRecipe && searchData ? (
                <ul
                  ref={boxref}
                  className={`absolute z-50 w-full fixed text-white bg-transparent  scrollbar backdrop-blur-lg shadow-lg mt-1 rounded-md border border-gray-100 max-h-48 ${
                    !error ? "overflow-y-scroll" : "overflow-hidden"
                  }`}
                >
                  {!error ? (
                    SuggestionRecipe.map((item) => {
                      return (
                        <li
                          className="px-4 py-2 text-gray-900 font-semibold opacity-70  cursor-pointer hover:bg-gray-100 hover:text-black"
                          key={item.id}
                          onClick={() => handlelist(item.name)}
                        >
                          {item.name}
                        </li>
                      );
                    })
                  ) : (
                    <li className="text-red-600 font-semibold p-2 ">
                      No Recipe Found
                    </li>
                  )}
                </ul>
              ) : null}
            </div>
            {/* Select Bar */}
            {location.pathname === "/" ? null : (
              <Link
                to={"/"}
                className="block p-1 text-lg  hover:text-black font-semibold cursor-pointer text-[#fff] focus:outline-none "
              >
                Home
              </Link>
            )}
            {token ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-[#fff] p-2 border w-max rounded-md text-sm hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/register"}
                className={`p-1 hover:text-black text-lg text-gray-700 font-semibold cursor-pointer  focus:outline-none overflow-hidden`}
              >
                SignIn
              </Link>
            )}

            {/* Favorite Icon */}
            <Link
              to={"/cart"}
              className="p-2 rounded-full hover:bg-gray-200 self-start mt-2"
              aria-label="Favorite"
            >
              {" "}
              <i className="fas fa-heart fa-2x text-red-500  hover:text-red-700 "></i>{" "}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default React.memo(Navbar);
