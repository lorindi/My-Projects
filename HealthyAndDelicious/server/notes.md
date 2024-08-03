Recipe App Development Plan with Express, JWT, Mongoose, and MongoDB



# Step 1: Create a New Project

* Create a project directory
mkdir client
cd client
Initialize a new Node.js project

            npm init --yes



# Step 2: Install Necessary Dependencies

            npm install express mongoose jsonwebtoken bcryptjs dotenv
            npm install --save-dev nodemon



# Step 3: Set Up Project Structure

* plaintext

            client/
            │
            ├── controllers/
            │   ├── authController.js
            │   ├── recipeController.js
            │   └── userController.js
            │
            ├── models/
            │   ├── recipe.js
            │   └── user.js
            │
            ├── routes/
            │   ├── authRoutes.js
            │   ├── recipeRoutes.js
            │   └── userRoutes.js
            │
            ├── middlewares/
            │   └── authMiddleware.js
            │
            ├── config/
            │   └── db.js
            │
            ├── .env
            ├── .gitignore
            ├── package.json
            ├── server.js
            └── README.md



# Step 4: Configure the Database

* Create MongoDB connection in config/db.js

            const mongoose = require('mongoose');
            const dotenv = require('dotenv');

            dotenv.config();

            const connectDB = async () => {
            try {
                await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                });
                console.log('MongoDB Connected');
            } catch (err) {
                console.error(err.message);
                process.exit(1);
            }
            };

            module.exports = connectDB;
            Add MongoDB URI to .env file

            plaintext

            MONGO_URI=your_mongodb_connection_string
            JWT_SECRET=your_jwt_secret



# Step 5: Create User Model
* Create models/user.js

            const mongoose = require('mongoose');
            const bcrypt = require('bcryptjs');

            const UserSchema = new mongoose.Schema({
            username: {
                type: String,
                required: true,
                unique: true,
            },
            email: {
                type: String,
                required: true,
                unique: true,
            },
            password: {
                type: String,
                required: true,
            },
            });

            UserSchema.pre('save', async function (next) {
            if (!this.isModified('password')) {
                return next();
            }
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
            });

            module.exports = mongoose.model('User', UserSchema);



# Step 6: Create Recipe Model
* Create models/recipe.js


            const mongoose = require('mongoose');

            const RecipeSchema = new mongoose.Schema({
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            ingredients: [{
                type: String,
                required: true,
            }],
            instructions: {
                type: String,
                required: true,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            });

            module.exports = mongoose.model('Recipe', RecipeSchema);



# Step 7: Create Authentication Controllers
* Create controllers/authController.js


            const User = require('../models/user');
            const jwt = require('jsonwebtoken');
            const bcrypt = require('bcryptjs');
            const dotenv = require('dotenv');

            dotenv.config();

            exports.register = async (req, res) => {
            const { username, email, password } = req.body;
            try {
                let user = await User.findOne({ email });
                if (user) {
                return res.status(400).json({ message: 'User already exists' });
                }
                user = new User({ username, email, password });
                await user.save();
                const payload = { user: { id: user.id } };
                jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err) throw err;
                res.status(201).json({ token });
                });
            } catch (err) {
                res.status(500).send('Server error');
            }
            };

            exports.login = async (req, res) => {
            const { email, password } = req.body;
            try {
                let user = await User.findOne({ email });
                if (!user) {
                return res.status(400).json({ message: 'Invalid credentials' });
                }
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
                }
                const payload = { user: { id: user.id } };
                jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err) throw err;
                res.json({ token });
                });
            } catch (err) {
                res.status(500).send('Server error');
            }
            };



# Step 8: Create Authentication Routes
* Create routes/authRoutes.js

            const express = require('express');
            const { register, login } = require('../controllers/authController');
            const router = express.Router();

            router.post('/register', register);
            router.post('/login', login);

            module.exports = router;



# Step 9: Create Authentication Middleware
* Create middlewares/authMiddleware.js

            const jwt = require('jsonwebtoken');
            const dotenv = require('dotenv');

            dotenv.config();

            module.exports = function (req, res, next) {
            const token = req.header('x-auth-token');
            if (!token) {
                return res.status(401).json({ message: 'No token, authorization denied' });
            }
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.user = decoded.user;
                next();
            } catch (err) {
                res.status(401).json({ message: 'Token is not valid' });
            }
            };



# Step 10: Create Recipe Controllers
* Create controllers/recipeController.js


            const Recipe = require('../models/recipe');

            exports.createRecipe = async (req, res) => {
            const { title, description, ingredients, instructions } = req.body;
            try {
                const newRecipe = new Recipe({
                title,
                description,
                ingredients,
                instructions,
                user: req.user.id,
                });
                const recipe = await newRecipe.save();
                res.json(recipe);
            } catch (err) {
                res.status(500).send('Server error');
            }
            };

            exports.getRecipes = async (req, res) => {
            try {
                const recipes = await Recipe.find({ user: req.user.id });
                res.json(recipes);
            } catch (err) {
                res.status(500).send('Server error');
            }
            };

            exports.getRecipe = async (req, res) => {
            try {
                const recipe = await Recipe.findById(req.params.id);
                if (!recipe) {
                return res.status(404).json({ message: 'Recipe not found' });
                }
                res.json(recipe);
            } catch (err) {
                res.status(500).send('Server error');
            }
            };

            exports.deleteRecipe = async (req, res) => {
            try {
                const recipe = await Recipe.findById(req.params.id);
                if (!recipe) {
                return res.status(404).json({ message: 'Recipe not found' });
                }
                if (recipe.user.toString() !== req.user.id) {
                return res.status(401).json({ message: 'User not authorized' });
                }
                await recipe.remove();
                res.json({ message: 'Recipe removed' });
            } catch (err) {
                res.status(500).send('Server error');
            }
            };



# Step 11: Create Recipe Routes
* Create routes/recipeRoutes.js

            const express = require('express');
            const { createRecipe, getRecipes, getRecipe, deleteRecipe } = require('../controllers/recipeController');
            const auth = require('../middlewares/authMiddleware');
            const router = express.Router();

            router.post('/', auth, createRecipe);
            router.get('/', auth, getRecipes);
            router.get('/:id', auth, getRecipe);
            router.delete('/:id', auth, deleteRecipe);

            module.exports = router;



            # Step 12: Create the Main Server File
            Create server.js

            const express = require('express');
            const connectDB = require('./config/db');
            const dotenv = require('dotenv');

            dotenv.config();

            const app = express();

            connectDB();

            app.use(express.json({ extended: false }));

            app.use('/api/auth', require('./routes/authRoutes'));
            app.use('/api/recipes', require('./routes/recipeRoutes'));

            const PORT = process.env.PORT || 5000;

            app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



# Step 13: Create a .gitignore File
* Create .gitignore
plaintext

node_modules/
.env



# Step 14: Run the Server
* Add a start script to package.json

json

            "scripts": {
            "start": "node server.js",
            "dev": "nodemon server.js"
            }
            Start the server with nodemon

            npm run dev