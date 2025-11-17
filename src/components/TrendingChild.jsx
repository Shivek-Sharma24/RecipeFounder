import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const TrendingChild = () => {
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const image = searchParams.get("image");

  return (
    <div className="grid gap-4 mb-4 animate__animated animate__zoomIn border m-2 w-[95%] md:w-[98%]  lg:w-[85%] xl:w-[75%] md:grid-cols-12 mx-auto shadow-xl">
      <img
        src={image}
        loading="lazy"
        alt="recipe image"
        className=" lg:h-[100%] object-fill w-full overflow-hidden col-span-12 lg:col-span-8 lg:w-[100%] md:w-[100%]"
      />
      <div className="col-span-12 lg:col-span-4 mt-5 space-y-5  p-2">
        <p className="text-md text-gray-500 m-1 mt-2 font-semibold font-mono">
          {name}
        </p>
        {/* <p className="text-3xl ">{recipe.details}</p> */}
        <p className="text-md text-gray-500 font-[Verdana] ">
          Cheesy and oh so satisfying, mac and cheese can do no wrong. Transport
          yourself back to childhood with one of these classic or kicked-up
          options. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolor, neque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officia, error. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Molestias, rem!
        </p>
        <p>
          <span className="font-bold">Lorem, ipsum.</span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          sint porro ut veritatis nihil voluptates possimus earum obcaecati qui
          dolore?
        </p>
      </div>
    </div>
  );
};

export default React.memo(TrendingChild);
