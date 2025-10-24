import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = `${import.meta.env.VITE_API_URL}/recipes`;
const ViewRecipe = () => {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
                const response = await axios.get(`${API_URL}/${id}`);
                setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}
      <p className="text-gray-700 mb-4">{recipe.title}</p>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients?.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Steps</h2>
      <p className="text-gray-700 mb-4">{recipe.steps}</p>
    </div>
  );
};

export default ViewRecipe;
