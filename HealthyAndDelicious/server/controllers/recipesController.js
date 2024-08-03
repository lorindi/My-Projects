import Recipe from "../models/Recipe.js";

// List all recipes
export const listRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('ownerId', 'name email'); // Populate ownerId with name and email
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
      const recipes = await Recipe.find({ ownerId: userId }).populate('ownerId', 'name email');
      if (!recipes || recipes.length === 0) {
        return res.status(404).json({ message: "No recipes found for this user" });
      }
      res.status(200).json(recipes);
    } catch (err) {
      console.error("Error listing user's recipes:", err);
      res.status(500).json({ message: "Failed to list user's recipes" });
    }
  };

// Create a new recipe
export const createRecipe = async (req, res) => {
  try {
    const { images, title, description, ingredients, category, prepTime, cookTime, servings, ownerId } = req.body;

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
 
    const savedRecipe = await newRecipe.save();
    console.log(savedRecipe);
    res.status(201).json(savedRecipe);
  } catch (err) {
    console.error("Error creating recipe:", err);
    res.status(500).json({ message: "Failed to create recipe" });
  }
};

// Update an existing recipe
export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedRecipe = await Recipe.findByIdAndUpdate(id, updates, { new: true });
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

    const recipe = await Recipe.findById(id).populate('ownerId', 'name email');
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (err) {
    console.error("Error getting recipe details:", err);
    res.status(500).json({ message: "Failed to get recipe details" });
  }
};
