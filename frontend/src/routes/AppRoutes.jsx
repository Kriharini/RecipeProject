import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddRecipe from "../pages/AddRecipe";
import EditRecipe from "../pages/EditRecipe";
import ViewRecipe from "../pages/ViewEditRecipe";
function AppRoutes(){
    return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="add" element={<AddRecipe/>} />
             <Route path="edit/:id" element={<EditRecipe />} />
             <Route path="recipe/:id" element={<ViewRecipe />} />
        </Route>
    </Routes>
    );
}

export default AppRoutes;