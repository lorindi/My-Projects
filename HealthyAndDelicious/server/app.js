import express from "express";
import router from "./routes/routes.js";
const app = express();

app.use('/api', router);

app.listen(5000, () => {
  console.log("Restful server is listening on port 5000...");
});
