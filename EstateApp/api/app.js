import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(express.json());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.use('/api/test',(req, res) => {
    res.send("It works")
})

app.listen(8800, () => {
  console.log("Server is running!");
});

