import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddRecipe from "../pages/AddRecipe";
function AppRoutes(){
    return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="add" element={<AddRecipe/>} />
        </Route>
    </Routes>
    );
}

export default AppRoutes;