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

## 2. Create a basic server file index.js in folder server
    - #index.js 
        const express = require("express");
        const app = express();
        app.get("/", (req, res) => {
        res.send("Restful service");
        });
        app.listen(5000, () => {
        console.log(`Restful server is listening on port 5000`);
        });

## 3. Create controllers for user and others
- Create a controllers folder in the server folder and in it create a            userController.js file and other necessary controllers.

## 4. Create routes
- Create a routes.js file in the server folder with the following content:
    - #routs.js

    const router = require("express").Router();

    const userController = require("./controllers/userController");
    const homeController = require("./controllers/homeController");

    router.use(userController);
    router.use(homeController);

    module.exports = router;

