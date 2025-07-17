import { useContext } from "react";
import React from "react";
import Demodata from "../context/ArrData";
import { useParams } from "react-router-dom";
import { context } from "../context/ContextApi";
import IndividualChild from "./IndividualChild";

const IndividualPage = () => {
  const { AllRecipe } = useContext(context);
  const { id } = useParams();
  const result1 = Demodata.filter((item) => item.id === parseInt(id));
  const result2 = AllRecipe.filter((item) => item.id === parseInt(id));

  if (!result1.length > 0 && !result2.length > 0)
    return <h1>Recipes Not Found</h1>;
  return (
    <>
      {result1.length > 0
        ? result1.map((recipe) => (
            <IndividualChild recipe={recipe} key={recipe.id} />
          ))
        : result2.map((recipe) => (
            <IndividualChild recipe={recipe} key={recipe.id} />
          ))}
    </>
  );
};

export default React.memo(IndividualPage);
