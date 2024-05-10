resource => noun, plural, crud  => photos

## 1. Install required dependencies
#### *npm init --yes 
#### *npm install express 
#### *npm i -D nodemon 
#### *npm i mongoose bcrypt jsonwebtoken 
#### *npm i cors
#### *npm install dotenv

#### In package.json, add the following scripts:
- "scripts": {
        "start": "nodemon index.js"
      },

## 2. Create a basic server file index.js in folder server.
    #index.js 
        const express = require("express");
        const app = express();
        app.get("/", (req, res) => {
        res.send("Restful service");
        });
        app.listen(5000, () => {
        console.log(`Restful server is listening on port 5000`);
        });

## 3. Create controllers for user and others.
- Create a controllers folder in the server folder and in it create a  userController.js file and other necessary controllers.

    #### userController.js
        const router = require("express").Router();
        module.exports = router;

    #### homeController.js
        const router = require("express").Router();
        module.exports = router;

## 4. Create routes.
- Create a routes.js file in the server folder with the following content:
    #### routs.js
        const router = require("express").Router();

        const userController = require("./controllers/userController");
        const homeController = require("./controllers/homeController");

        router.use(userController);
        router.use(homeController);

        module.exports = router;


- In your index.js, use the router and specify the base URL:
    #### index.js
        const router = require("./router");
        app.use("/portfolio", router);

## 5. Creating models for work and skills.
- Create a models folder in the server directory and inside it, create model files for work and skills.

#### User.js
    const mongoose = require("mongoose");
    const userSchema = new mongoose.Schema({
        image: {
            required: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        username: {
            type: String,
            required: [true, "Username is required"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        description: {
            type: String,
            required: true,
        },
    });
    userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    });
    const User = mongoose.model("User", userSchema);
    module.exports = User;

#### Work.js
    const mongoose = require("mongoose");
    const workSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        technologies: {
            type: [String],
            required: true,
        },
        createdAt: {
            type: String,
            required: true,
        },
        creator: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    });
    const Work = mongoose.model("Work", workSchema);
    module.exports = Work;

#### Skills.js
    const mongoose = require("mongoose");
    const { categories } = require("./data");
    const skillSchema = new mongoose.Schema({

        icon: {
            type: String,
        },

        name: {
            type: String,
            required: [true, "Skill name is required"],
            minlength: 2, 
        },

        description: {
            type: String,
            required: [true, "Skill description is required"],
            minlength: 5,
        },
        categories: {
            type: String,
            enum: categories,
        },
        creator: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    });
    const Skill = mongoose.model("Skill", skillSchema);
    module.exports = Skill;

