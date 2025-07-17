import { useContext } from "react";
import { context } from "../context/ContextApi";
import React from "react";

const ChildSection = ({ item }) => {
  const { removeFav , removeLoginFav} = useContext(context);
const token = localStorage.getItem("token")
  return (
    <div className="rounded animate__animated animate__zoomIn  shadow-lg flex flex-col border">
      <div className="relative ">
        <a href="#">
          <img
            className="w-full overflow-hidden object-cover h-[100%] "
            src={item.image}
            alt="Sunset in the mountains"
            loading="lazy"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
      </div>
      <div className="px-6 py-4 mb-">
        <a
          href="#"
          className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
        >
          Simplest {item.name} Recipe ever
        </a>
        <p className="text-gray-500 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="px-6 py-3  flex flex-row items-center justify-between ">
        <button
          onClick={!token ?() => removeFav(item.id):()=> removeLoginFav(item._id)}
          className="py-1 text-md border px-2 py-1 rounded-md bg-red-500 hover:bg-red-600  font-regular text-white mr-1 flex flex-row items-center"
        >
          Remove from Favourite
        </button>
      </div>
    </div>
  );
};
export default React.memo(ChildSection);
