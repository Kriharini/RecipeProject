import { Link } from "react-router-dom";

export default function RecipeCard({recipe}){
/* return(<div className="bg-white border rounded-lg shadow p-4 hover:shadow-lg transition">
<h3 className="text-xl font-semibold text-green-700 mb-2">{recipe.title}</h3>
<p className="text-sm text-gray-600 mb-2">
    <strong>Ingredients: </strong>{recipe.ingredients.join(", ")}
</p>
<p className="text-gray-700 text-sm">
    {recipe.steps}
</p>
</div>); */
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition p-6 flex flex-col justify-between border border-gray-100">
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div>
        <h3 className="text-2xl font-serif text-gray-900 mb-2">{recipe.title}</h3>
        <p className="text-gray-700 text-base leading-relaxed">{recipe.desc}</p>
      </div>


        <div className="flex items-center justify-between">
          <Link
            to={`/recipe/${recipe._id}`}
            className="text-orange-600 font-medium hover:underline"
          >
            View Recipe →
          </Link>
        </div>
        
    {/*   <div className="flex justify-between items-center mt-6">
        <div className="flex gap-3">
          <Link
            to={`/recipe/${recipe._id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-full text-sm transition"
          >
            View
          </Link>
          
          <Link
            to={`/edit/${recipe._id}`}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-full text-sm transition"
          >
            Edit
          </Link>
        </div>
       {/*  <button
          onClick={() => onDelete(recipe.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-full text-sm transition"
        >
          Delete
        </button> }
      </div> */}
    </div>
  );
}