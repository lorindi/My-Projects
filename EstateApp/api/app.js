import express from "express";
import cors from "cors";

import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/estate")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Restful service");
});

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("Restful server is listening on port 5000...")

});
