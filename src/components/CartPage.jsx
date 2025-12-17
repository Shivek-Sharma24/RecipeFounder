import React, { useContext, useEffect } from "react";
import { context } from "../context/ContextApi";
import ChildSection from "./ChildSection";

const CartPage = () => {
  const { favRecipe, LoginFavRecipe, fetchAllFavRecipesRegister } =
    useContext(context);
  const token = localStorage.getItem("token");
  useEffect(() => {
    // let mount = true;
    if (token) {
      fetchAllFavRecipesRegister();
    }
  //  return ()=>{
  //  mount = false
  //  }
  }, [token]);

  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-3 gap-2 mb-4">
      {!token ? (
        favRecipe.length > 0 ? (
          favRecipe.map((item) => <ChildSection item={item} key={item.id} />)
        ) : (
          <div className="ms-auto">
            <p className="text-[#fff] text-2xl font-semibold  ">
              No Favourites Found
            </p>
          </div>
        )
      ) : LoginFavRecipe.length > 0 ? (
        LoginFavRecipe.map((item) => (
          <ChildSection item={item} key={item._id} />
        ))
      ) : (
        <div className="text-center">
          <p className="text-black text-2xl font-semibold text-indigo-500 font-mono ">
            No Favourites Found
          </p>
        </div>
      )}
    </div>
  );
};

export default React.memo(CartPage);
