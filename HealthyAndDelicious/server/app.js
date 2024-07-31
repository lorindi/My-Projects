import express from "express";
import router from "./routes/routes.js";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/healthy-delicious-db")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
  
app.use(express.json());

app.use("/api", router);

app.listen(5000, () => {
  console.log("Restful server is listening on port 5000...");
});
