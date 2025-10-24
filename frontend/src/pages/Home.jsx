import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const API_URL = `${import.meta.env.VITE_API_URL}/recipes`;


function Home() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching recipes from API:", API_URL);
    fetch(API_URL)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setRecipes(data);
        console.log("Recipes fetched successfully:", data);
      })
      .catch(err => {
        setError("Failed to fetch recipes. Please try again later.");
        console.error("Error fetching data:", err);
      });
    // Alternative with axios:
    // axios.get(API_URL)
    //     .then(res => setRecipes(res.data))
    //     .catch(err => {
    //         setError("Failed to fetch recipes. Please try again later.");
    //         console.error("Error fetching data:", err);
    //     });
  }, []);

  return (
   /*  <>
      <h2 className="text-xl font-bold text-green-700 mb-4">Recipe List</h2>
      {error && (
        <div className="text-red-600 mb-4">{error}</div>
      )}
      <ul>
        {recipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </ul>
    </> */
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
        All Recipes
      </h2>
      {error && (
        <div className="text-red-600 mb-4">{error}</div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} /* onDelete={handleDelete}  *//>
        ))}
      </div>
    </div>
  );
}

export default Home;