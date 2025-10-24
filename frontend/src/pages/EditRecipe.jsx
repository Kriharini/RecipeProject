import axios from "axios";
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const API_URL = `${import.meta.env.VITE_API_URL}/recipes`;
function EditRecipe() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = React.useState({});

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`${API_URL}/${id}`);
                setRecipe(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRecipe();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_URL}/${id}`, recipe);
            // Optionally, redirect or show a success message here
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
       <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-xl">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={recipe.title || ''}  className="w-full border p-3 rounded-lg" onChange={(e) => setRecipe({ ...recipe, title: e.target.value })} />
                <input type="text" value={recipe.ingredients ? recipe.ingredients.join(", ") : ''} onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value.split(",").map(ing => ing.trim()) })} className="w-full border p-3 rounded-lg"  />
                
                <textarea value={recipe.steps || ''} onChange={(e) => setRecipe({ ...recipe, steps: e.target.value })} className="w-full border p-3 rounded-lg"
                rows="4" required/>
                <input type="text" value={recipe.image || ''}  className="w-full border p-3 rounded-lg" onChange={(e) => setRecipe({ ...recipe, image: e.target.value })} />
                
                <div className="flex justify-between items-center mt-6">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition"
                    >
                        Save Changes
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="text-gray-500 hover:text-gray-800"
                    >Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditRecipe;