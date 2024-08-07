import Restaurant from "../models/Restaurant";

export const createRestaurant = async (req, res) => {
  try {
    const { name, location, address, latitude, longitude, ownerId } =
      req.body;

    const newRestaurant = new Restaurant({
      name,
      location,
      address,
      latitude,
      longitude,
      ownerId,
    });
    if (!name || !location || !address || !latitude || !longitude || !ownerId) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const saveRestaurant = await newRestaurant.save();
    console.log(saveRestaurant);
    res.status(200).json(saveRestaurant);
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
    const restaurant =await Restaurant.find(id).populate("ownerId", "name email");
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
    const updateNewRestaurant = await Restaurant.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!updateNewRestaurant) return res.status(404).json({message: "Not found updated restaurant"})
    res.status(200).json(updateNewRestaurant)
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update restaurant" });
  }
};

export const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findByIdAndDelete(id)
    if (!restaurant) return res.status(404).json({message: "Not found deleted restaurant"})
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete restaurant" });
  }
};
