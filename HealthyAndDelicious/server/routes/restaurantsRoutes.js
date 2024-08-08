import express from "express";
import {
  createRestaurant,
  listRestaurants,
  detailsRestaurant,
  updateRestaurant,
  deleteRestaurant,
  addExistingRecipeToRestaurant,
  getRecipesForRestaurant
} from "../controllers/restaurantsController.js";
const router = express.Router();

router.post("/create", createRestaurant);

router.get("/list", listRestaurants);
router.get("/details/:id", detailsRestaurant);

router.put("/update/:id", updateRestaurant);
router.post("/delete/:id", deleteRestaurant);

router.post("/add-recipe", addExistingRecipeToRestaurant);
router.get("/:restaurantId/recipes", getRecipesForRestaurant); 

export default router;
