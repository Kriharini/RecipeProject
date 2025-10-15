/* import { Link, Outlet  } from "react-router-dom";
function MainLayout(){
    return(
        <div>
            
            <nav style={{ padding: "10px", background: "#f5f5f5" }}>
            <Link to="/">Home</Link> |{" "}
            <Link to="/add">Add</Link>
            </nav>
            <div style={{ padding: "20px" }}>
                <Outlet />
            </div>
      </div>);
}

 */


/* import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    
      <nav className="bg-gray-400 text-white shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="space-x-4">
            <Link to="/" className="font-semibold hover:text-yellow-200">
              Home
            </Link>
            <Link
              to="/add"
              className="px-3 py-1 font-medium hover:text-yellow-200"
            >
              + Add Recipe
            </Link>
          </div>
        </div>
      </nav>

    
      <main className="flex-grow max-w-5xl mx-auto p-6">
        <Outlet />
      </main>

 
      <footer className="text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Recipe Book. All rights reserved.
      </footer>
    </div>
  );
}
 */

import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">🍳 Recipe Book</h1>
   
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-200">Home</Link>
          <Link to="/add" className="hover:text-yellow-200">Add Recipe</Link>
        </div>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
      <footer className="text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Recipe Book. All rights reserved.
      </footer>
    </div>
  );
}