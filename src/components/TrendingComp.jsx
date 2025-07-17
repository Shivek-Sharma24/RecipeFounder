import React from "react";
import { Link } from "react-router-dom";
const TrendingComp = ({ name, id, image }) => {
  return (
    <div className="grid  grid-rows-1 max-w-[100%] mt-0  gap-3 ">
      <div className="grid  md:grid-rows-12 w-[100%] h-70 shadow-lg border-2 ">
        <Link
          to={`/trending/${id}/${name}?image=${encodeURIComponent(image)}`}
          className="md:h-56 md:row-span-10"
        >
          <img
            src={image}
            alt=""
            className=" overflow-hidden object-cover h-full"
          />
        </Link>
        <p className="md:row-span-2 text-xl p-2 text-center tracking-wide font-medium ">
          {name}
        </p>
      </div>
    </div>
  );
};

export default React.memo(TrendingComp);
