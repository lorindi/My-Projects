import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

import mongoose from "mongoose";
import { PORT, MONGO_DB_CONNECTION_STRING } from "./constraints/constraints.js";

const app = express();

mongoose
  .connect(MONGO_DB_CONNECTION_STRING)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())
app.use(cors());

app.get("/", (req, res) => {
  res.send("Restful service");
});

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Restful server is listening on port ${PORT}...`)

});
