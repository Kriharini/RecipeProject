import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = `${import.meta.env.VITE_API_URL}/recipes`;
const ViewRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [updating, setUpdating] = useState(false);

  // Fetch recipe by ID
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
        //setTimeout(()=>setLoading(false),1000);;
      }
    };
    fetchRecipe();
  }, [id]);

  // Handle input changes in edit mode
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // Save updates
  const handleSave = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      /* const res = await fetch(`http://localhost:5000/recipes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      }); */
      await axios.put(`${API_URL}/${id}`, recipe);
      alert("Recipe updated successfully!");
      setIsEditing(false);
      
    } catch (err) {
      console.error("Error updating recipe:", err);
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("Recipe deleted successfully.");
        navigate("/");
      } else {
        alert("Failed to delete recipe.");
      }
    } catch (err) {
      console.error("Error deleting recipe:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">
          {isEditing ? (
            <input
              type="text"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          ) : (
            recipe.title
          )}
        </h1>

        <div className="space-x-3">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                disabled={updating}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
              >
                {updating ? "Saving..." : "Save"}
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>

      {/* Image */}
      {isEditing ? (
        <input
          type="text"
          name="image"
          value={recipe.image || ""}
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded"
          placeholder="Image URL"
        />
      ) : (
        recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )
      )}

      

      {/* Ingredients */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        {isEditing ? (
          <textarea
            name="ingredients"
            value={recipe.ingredients?.join("\n") || ""}
            onChange={(e) =>
              setRecipe({ ...recipe, ingredients: e.target.value.split("\n") })
            }
            className="w-full border p-2 rounded"
            placeholder="Enter each ingredient on a new line"
          />
        ) : (
          <ul className="list-disc list-inside">
            {recipe.ingredients?.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Steps */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Steps</h2>
        {isEditing ? (
          <textarea
            name="steps"
            value={recipe.steps}
            onChange={(e) =>
              setRecipe({ ...recipe, steps: e.target.value})
            }
            className="w-full border p-2 rounded"
            placeholder="Enter each step on a new line"
          />
        ) : (
          <p className="text-gray-700">{recipe.steps}</p>
        )}
      </div>
    </div>
  );
};

export default ViewRecipe;
