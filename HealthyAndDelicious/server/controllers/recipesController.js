import Ingredient from "../models/Ingredient.js";
import Recipe from "../models/Recipe.js";

// List all recipes
export const listRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate(
      "ownerId",
      "name email avatar createdAt"
    );
    res.status(200).json(recipes);
  } catch (err) {
    console.error("Error listing recipes:", err);
    res.status(500).json({ message: "Failed to list recipes" });
  }
};

// List recipes by user
export const listRecipesByUser = async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from request parameters
    console.log(req);
    const recipes = await Recipe.find({ ownerId: userId }).populate(
      "ownerId",
      "name email"
    );
    if (!recipes || recipes.length === 0) {
      return res
        .status(404)
        .json({ message: "No recipes found for this user" });
    }
    res.status(200).json(recipes);
  } catch (err) {
    console.error("Error listing user`s recipes:", err);
    res.status(500).json({ message: "Failed to list user`s recipes" });
  }
};

// Create a new recipe
export const createRecipe = async (req, res) => {
  try {
    const {
      images,
      title,
      description,
      ingredients,
      category,
      prepTime,
      cookTime,
      servings,
      ownerId,
    } = req.body;
    console.log(req.body);

    const newRecipe = new Recipe({
      images,
      title,
      description,
      ingredients,
      category,
      prepTime,
      cookTime,
      servings,
      ownerId,
    });
    // if (!images || images.length < 4) {
    //   return res
    //     .status(400)
    //     .json({ message: "A recipe must have at least 4 images!" });
    // }
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
    // mongoose.connection.close();
  } catch (err) {
    console.error("Error creating recipe:", err);
    res.status(500).json({ message: "Failed to create recipe" });
  }
};

// Update an existing recipe
export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params.id);
    const updates = req.body;

    const updatedRecipe = await Recipe.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(updatedRecipe);
  } catch (err) {
    console.error("Error updating recipe:", err);
    res.status(500).json({ message: "Failed to update recipe" });
  }
};

// Delete a recipe
export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    console.error("Error deleting recipe:", err);
    res.status(500).json({ message: "Failed to delete recipe" });
  }
};

// Get details of a specific recipe
export const detailsRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const recipe = await Recipe.findById(id).populate("ownerId", "name email");
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (err) {
    console.error("Error getting recipe details:", err);
    res.status(500).json({ message: "Failed to get recipe details" });
  }
};

export const ingredientsInfo = (req, res) => {
  try {
    const ingredients = Ingredient.find();
    if (!ingredients)
      return res.status(404).json({ message: "Not found ingredients" });
    res.status(200).json(ingredients);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to view ingredients" });
  }
};
