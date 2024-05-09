const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/portfolio")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use("/portfolio", router);

app.listen(5000, () => {
  console.log(`Restful server is listening on port 5000`);
});
