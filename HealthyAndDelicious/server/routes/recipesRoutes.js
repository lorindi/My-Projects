import express from "express";
import {
  listRecipes,
  listRecipesByUser,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  detailsRecipe,
  ingredientsInfo,
} from "../controllers/recipesController.js";

const router = express.Router();

// Use POST for creating a new recipe
// Create a new recipe
router.post("/create", createRecipe); 



// Use PUT/PATCH for updating recipes and DELETE for deleting

// Update an existing recipe
router.put("/update/:id", updateRecipe); 

// Delete a recipe
router.delete("/delete/:id", deleteRecipe); 



// Use GET for listing recipes and recipe details

// List all recipes
router.get("/list", listRecipes); 

// List recipes by user
router.get("/list/:userId", listRecipesByUser); 

// Get details of a specific recipe
router.get("/details/:id", detailsRecipe); 

router.get("/ingredients", ingredientsInfo);




export default router;
