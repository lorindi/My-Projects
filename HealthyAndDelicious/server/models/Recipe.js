import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema({
  images: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length >= 4;
      },
      message: (prop) => `A recipe must have at least 4 images!`,
    },
    required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 3,
    match: /\S{3,}/,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    match: /\S{5,}/,
  },
  ingredients: {
    type: String,
    required: true,
    minlength: 3,
    match: /\S{3,}/,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "breakfast",
      "lunch",
      "dinner",
      "snack",
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free",
      "low-carb",
      "low-calorie",
      "high-protein",
      "pescatarian",
      "keto",
      "paleo",
      "mediterranean",
      "whole30",
    ],
  },
  prepTime: {
    type: String,
    required: true,
    minlength: 1,
    match: /\S{1,}/,
  },
  cookTime: {
    type: String,
    required: true,
    minlength: 1,
    match: /\S{1,}/,
  },
  servings: {
    type: String,
    required: true,
    minlength: 1,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
