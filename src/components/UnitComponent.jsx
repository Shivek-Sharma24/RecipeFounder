import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { context } from "../context/ContextApi";

const UnitComponent = ({ recipe }) => {
  const { handleFav, isFavorite, RegisterUsersFavourite, isLoginFav } =
    useContext(context);
  const token = localStorage.getItem("token");

  return (
    <div className="rounded overflow-hidden shadow-xl animate__animated animate__zoomIn ">
      <div className="relative">
        <Link to={`/Individual/${recipe.id}`}>
          <img
            className="w-full"
            src={recipe.image}
            alt="recipes images"
            loading="lazy"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </Link>

        <div className="text-sm absolute top-0 right-0 bg-indigo-500 px-4 text-white rounded-full h-[3rem] w-[3rem] flex flex-col items-center justify-center mt-3 mr-3 hover:bg-indigo-800 hover:text-indigo-600 transition duration-500 ease-in-out">
          <button
            onClick={
              !token
                ? () => handleFav(recipe)
                : () => RegisterUsersFavourite(recipe)
            }
          >
            <i
              className={`fas fa-heart fa-2x ${
                !token
                  ? isFavorite(recipe.id)
                    ? "text-red-500"
                    : "text-white"
                  : isLoginFav(recipe.name)
                  ? "text-red-500"
                  : "text-white"
              } mx-2`}
            ></i>
          </button>
        </div>
      </div>
      <div className="px-6 py-3">
        <p className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
          {recipe.name}
        </p>
        <p className="text-gray-400 text-md mt-1">{recipe.details}</p>
      </div>
      <div className="px-6 py-2 flex flex-row items-center">
        <span className="py-1 text-sm font-regular text-gray-300 mr-1 flex flex-row items-center">
          Lorem ipsum dolor sit amet.
        </span>
      </div>
    </div>
  );
};

export default React.memo(UnitComponent);
