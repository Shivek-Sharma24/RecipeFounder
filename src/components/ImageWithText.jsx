import React from "react";
const ImageWithText = () => {
  
  return (
    <div className="grid w-full border-0 md:grid-cols-12 ">
      <img
        loading="lazy"
        src="../public/image/imageandtext-imageOFFoodrecipe (1).webp"
        //  src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/43/36/97/h40cdjMARGCcgOUjZpOy_mac%2520and%2520cheese-1176.jpg"
        alt=""
        className="h-96 object-cover w-full overflow-hidden col-span-12 lg:col-span-7 lg:w-[98%]"
      />
      <div className="col-span-12 xl:col-span-4 lg:col-span-5 lg:mt-0 mt-5 xl:space-y-4  space-y-2 w-full p-2 lg:p-1 lg:mx-2">
        <p className="text-sm text-gray-500 m-1 mt-2 font-semibold font-mono">
          COLLECTION
        </p>
        <p className="text-3xl ">32 Best Mac & Cheese Recipes</p>
        <p className="text-md text-gray-500 font-[Verdana]">
          Cheesy and oh so satisfying, mac and cheese can do no wrong. Transport
          yourself back to childhood with one of these classic or kicked-up
          options. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolor, neque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officia, error. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Molestias, rem!
        </p>
      </div>
    </div>
  );
};

export default React.memo(ImageWithText);
