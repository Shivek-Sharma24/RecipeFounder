import { createContext, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
export const context = createContext();

const ContextProvider = (props) => {
  const [favRecipe, SetfavRecipe] = useState([]);
  const [AllRecipe, setAllRecipe] = useState([]);
  const [LoginFavRecipe, setLoginFavRecipe] = useState([]);
  const [loading , setloading] = useState(false)
  const navigate = useNavigate();
  let token = localStorage.getItem("token");


  async function displayRecipe(query) {
    if (query) {
      let response = await axios.get(
        `https://dummyjson.com/recipes/search?q=${query}`
      );
      let result = response.data;
      setAllRecipe(result.recipes);
    } else {
      console.log("no query in display recipe");
    }
  }

  const handleFav = (recipe) => {
    const exists = favRecipe.find((item) => item.id === recipe.id); // use current state
    const toastId = `fav-${recipe.id}`;

    if (exists) {
      SetfavRecipe((prev) => prev.filter((item) => item.id !== recipe.id));
      toast.dismiss(toastId);
      toast(`${recipe.name} removed from favorites`, {
        id: toastId,
        icon: "❌",
      });
    } else {
      SetfavRecipe((prev) => [...prev, recipe]);
      toast.dismiss(toastId);
      toast(`${recipe.name} added to favorites`, { id: toastId, icon: "✅" });
    }
  };

  const isFavorite = (id) => {
    return favRecipe.some((recipe) => recipe.id === id);
  };

  const isLoginFav = (name) => {
    return LoginFavRecipe.some((recipe) => recipe.name === name);
  };

  function removeFav(id) {
    let updateCart = favRecipe.filter((item) => item.id !== id);
    SetfavRecipe(updateCart);
    toast.success("remove Recipe  from Favourites");
  }

  // Authentication functions start
  // ---->>> Signup function
  async function RegisterAPI(data) {
    setloading(true)
    // console.log(data);
    try {
      let response = await axios.post("https://recipe-founder-server.vercel.app/signup", data);
      // console.log(response.data);
      toast.success("Registered Successfully");
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      toast.error("failed to register your account ");
      console.log("error in signup api", error);
    }finally{
      setloading(false)
    }
  }

  // ---> Login API
  async function LoginAPI(data) {
     setloading(true)
    // console.log(data);
    try {
      let response = await axios.post("https://recipe-founder-server.vercel.app/login", data);
      console.log(response.data);
      toast.success("Login Successfully");
      localStorage.setItem("token", response.data.token);
      setloading(false)
      navigate("/");
    } catch (error) {
      toast.error("Login Failed");
      console.log("Login error", error);
    }finally{
      setloading(false)
    }
  }

  async function RegisterUsersFavourite(recipe) {
    if (token) {
      try {
        const duplicateRecipe = LoginFavRecipe.some(
          (item) => item.name === recipe.name
        );
        if (!duplicateRecipe) {
          let response = await axios.post(
            "https://recipe-founder-server.vercel.app/favRecipe",
            recipe,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          toast.success("Added to Favourites");
         console.log(response.data)
        } else {
          toast.error("Recipe Already in Favourites!");
        }
      } catch (error) {
        toast.error("can not added to favourite !", error);
      }
    } else {
      toast.error("Unable to add Favourite Recipe");
    }
  }

  async function fetchAllFavRecipesRegister() {
    
      try {
        let response = await axios.get(
          "https://recipe-founder-server.vercel.app/fetchAllFavRecipe",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        setLoginFavRecipe(response.data.recipe);
      } catch (error) {
        toast.error("An error Occured while fecthing Recipes");
        console.log("error in fecthing recipes", error);
      }
    }
    

  // remove button of login user fav
  async function removeLoginFav(id){
   try {
    let response = await axios.delete(`https://recipe-founder-server.vercel.app/delete/${id}`)
    console.log(response.data)
    toast.success("Remove Successfully")
    fetchAllFavRecipesRegister()
   } catch (error) {
    toast.error("Unable to delete")
    console.log("some error while deleting" , error)
   }
  }
  


  return (
    <context.Provider
      value={{
        favRecipe,
        SetfavRecipe,
        isFavorite,
        removeFav,
        handleFav,
        displayRecipe,
        AllRecipe,
        RegisterAPI,
        LoginAPI,
        RegisterUsersFavourite,
        fetchAllFavRecipesRegister,
        LoginFavRecipe,
        isLoginFav,
        removeLoginFav,
        loading
      }}
    >
      {props.children}
    </context.Provider>
  );
};
export default ContextProvider;
