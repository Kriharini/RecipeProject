import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = `${import.meta.env.VITE_API_URL}/recipes`;

function AddRecipe() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState("");
    const [image, setImage] = useState(""); // for URL
    const navigateToHome = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const recipe = {
            title,
            ingredients: ingredients.split(",").map((ing) => ing.trim()),
            steps,
            image,
        };

        await axios.post(API_URL, recipe);
        navigateToHome("/");
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-xl mt-10 p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Add a New Recipe</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="w-full border rounded-md p-2"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <input
                    className="w-full border rounded-md p-2"
                    placeholder="Ingredients comma separated"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                />

                <textarea
                    className="w-full border rounded-md p-2 h-24"
                    placeholder="Steps"
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                    required
                />
                <input
                        className="border p-2 w-full rounded"
                        placeholder="Image URL (optional)"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        />
                <button
                    className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
                    type="Submit"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddRecipe;