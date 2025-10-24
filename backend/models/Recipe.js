import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [String],
  steps: String,
  imageURL: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  image: { type: String } ,// new field for image URL
});

export default mongoose.model("Recipe", recipeSchema);
