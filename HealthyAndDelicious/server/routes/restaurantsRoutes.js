import express from "express";
import {
  createRestaurant,
  listRestaurants,
  detailsRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurantsController.js";
const router = express.Router();

router.post("/create", createRestaurant);

router.get("/list", listRestaurants);
router.get("/details/:id", detailsRestaurant);

router.put("/update/:id", updateRestaurant);
router.post("/delete/:id", deleteRestaurant);

export default router;
