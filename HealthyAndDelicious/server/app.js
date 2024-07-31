import express, { urlencoded } from "express";
import router from "./routes/routes.js";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/healthy-delicious-db")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api", router);

app.listen(5000, () => {
  console.log("Restful server is listening on port 5000...");
});
