import UnitComponent from "./UnitComponent";
import React, { useContext } from "react";
import Demodata from "../context/ArrData";
import ImageWithText from "./ImageWithText";
import TrendingComp from "./TrendingComp";
import { context } from "../context/ContextApi";
const Home = () => {
  const { AllRecipe } = useContext(context);
  return (
    <>
      <div className="grid min-h-screen border-0 m-2 w-[95%] md:w-[75%] mx-auto shadow-xl">
        <h1 className="mx-3 p-1 text-2xl font-medium font-serif ">
          This is Latest recipes.
        </h1>
        {/* <div className="text-center grid grid-cols-1 p-1 md:p-2 m-1 md:m-2 gap-2 place-items-center rounded-lg md:gap-2 md:grid-cols-3"> */}
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 md:gap-2 xl:gap-10 mb-2 mt-2">
          {!AllRecipe.length > 0
            ? Demodata.map((recipe) => (
                <UnitComponent recipe={recipe} key={recipe.id} />
              ))
            : AllRecipe.map((recipe) => (
                <UnitComponent recipe={recipe} key={recipe.id} />
              ))}
        </div>
        <div className="grid gap-2 grid-rows-1 mt-4 md:gap-5">
          <ImageWithText />

          <p className="text-2xl  mt-4 md:mt-0  text-white font-medium font-[verdana] tracking-widest">
            TRENDING NOW
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <TrendingComp
              name="Paneer Recipe"
              id="1"
              image="https://img.freepik.com/free-photo/top-view-high-protein-meal-composition_23-2149089634.jpg?ga=GA1.1.950671070.1749485799&semt=ais_items_boosted&w=740"
            />
            <TrendingComp
              name="Fried Rice Recipe"
              id="2"
              image="https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg?ga=GA1.1.950671070.1749485799&semt=ais_items_boosted&w=740"
            />
            <TrendingComp
              name="Sambar Recipe"
              id="3"
              image="https://img.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18712.jpg?ga=GA1.1.950671070.1749485799&semt=ais_items_boosted&w=740"
            />
            <TrendingComp
              name="Dal Makhani Recipe"
              id="4"
              image="https://img.freepik.com/free-photo/side-view-dinner-table-fallen-oil-bottle-beans-cutting-board-different-spices_140725-87088.jpg?ga=GA1.1.950671070.1749485799&semt=ais_items_boosted&w=740"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Home);
