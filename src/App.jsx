import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import IndividualPage from "./components/IndividualPage";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import CartPage from "./components/CartPage";

import Layout from "./components/Layout";
import TrendingChild from "./components/TrendingChild";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useContext } from "react";
import { context } from "./context/ContextApi";
import { useEffect } from "react";
import React from "react";

function App() {
  const {fetchAllFavRecipesRegister} = useContext(context);
  useEffect(()=>{
    let token = localStorage.getItem("token");
    if(token){
      fetchAllFavRecipesRegister()
    }
  } , [fetchAllFavRecipesRegister])
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Individual/:id" element={<IndividualPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trending/:id/:name" element={<TrendingChild />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default React.memo(App);
