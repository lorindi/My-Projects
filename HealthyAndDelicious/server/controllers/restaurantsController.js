import Restaurant from "../models/Restaurant.js";
import Recipe from "../models/Recipe.js";

export const createRestaurant = async (req, res) => {
  try {
    const { name, location, address, latitude, longitude, ownerId } = req.body;

    if (!name || !location || !address || !latitude || !longitude || !ownerId) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    
  
    const newRestaurant = new Restaurant({
      name,
      location,
      address,
      latitude,
      longitude,
      ownerId,
    });

    const savedRestaurant = await newRestaurant.save();
    console.log(savedRestaurant);
    res.status(201).json(savedRestaurant);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create restaurant" });
  }
};

export const listRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate(
      "ownerId",
      "name avatar createdAt"
    );
    if (!restaurants || restaurants.length === 0)
      return res.status(404).json({ message: "Not found restaurants" });
    res.status(200).json(restaurants);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to view restaurants" });
  }
};

export const detailsRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.find(id).populate(
      "ownerId",
      "name email"
    );
    if (!restaurant)
      return res.status(404).json({ message: "Not found detail restaurant" });
    res.status(200).json(restaurant);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to load restaurants" });
  }
};

export const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const updateNewRestaurant = await Restaurant.findByIdAndUpdate(
      id,
      newData,
      {
        new: true,
      }
    );
    if (!updateNewRestaurant)
      return res.status(404).json({ message: "Not found updated restaurant" });
    res.status(200).json(updateNewRestaurant);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update restaurant" });
  }
};

export const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findByIdAndDelete(id);
    if (!restaurant)
      return res.status(404).json({ message: "Not found deleted restaurant" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete restaurant" });
  }
};

export const addExistingRecipeToRestaurant = async (req, res) => {
  try {
    const { restaurantId, recipeId } = req.body;

    //Find the restaurant by ID
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant)
      return res.status(404).json({ message: "Restaurant not found" });

    //Check if the recipe exists
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    //Add the recipe to the restaurant`s recipes array if it`s not already added
    if (!restaurant.recipes.include(recipeId)) {
      restaurant.recipes.push(recipeId);
      await restaurant.save();
      res
        .status(200)
        .json({ message: "Recipe added to restaurant successfully" });
    } else {
      res
        .status(400)
        .json({ message: "Recipe to already associated with the restaurant" });
    }
  } catch (err) {
    console.error("Error adding recipe to restaurant", err);
    res.status(500).json({ message: "Failed to add recipe to restaurant" });
  }
};

//Function to retrieve recipes for a restaurant
export const getRecipesForRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    //Find the restaurant and populate the recipes field
    const restaurant = await Restaurant.findById(restaurantId).populate(
      "recipes"
    );
    if (!restaurant)
      return res.status(404).json({ message: "Restaurant not found" });

    res.status(200).json(restaurant.recipes);
  } catch (err) {
    console.error("Error retrieving recipes for restaurant", err);
    res
      .status(500)
      .json({ message: "Failed to retrieve recipes for restaurant" });
  }
};
