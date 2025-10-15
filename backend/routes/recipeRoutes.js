import express from "express";
import Recipe from "../models/Recipe.js";

const router = express.Router();

// ✅ Get all recipes
router.get("/", async (req, res) => {
  try {
    const { title, tag } = req.query;
    let filter = {};
    if (title) filter.title = { $regex: title, $options: "i" };
    if (tag) filter.tags = { $in: [tag] };

    const recipes = await Recipe.find(filter);
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Add recipe
router.post("/", async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.json(newRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get single recipe
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: "Recipe not found" });
    res.json(recipe);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// ✅ Update recipe
router.put("/:id", async (req, res) => {
  try {
    const updated = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Delete recipe
router.delete("/:id", async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;