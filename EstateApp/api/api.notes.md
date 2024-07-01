cd api
npm init -y

package.json => "type":"module", => import a from './b' replaces const a = require("b")

npm i express

Inside app.js: 
    import express from "express"; 

    const app = express();

    app.listen(8800, () => {
        console.log("Server is running!");
    })


*node app.js
-------OR-------
*npm i nodemon
*nodemon app.js
-------OR-------
'*console-ninja node --watch app.js'  with extension Console Ninja


Inside app.js add:
app.use("/api/test", (req, res) => {
    res.send("It works!")
})


REACT APP --> (req) --> EXPRESS API  --> PRISMA --> MONGODB
REACT APP <-- (res) <-- EXPRESS API  <-- PRISMA <-- MONGODB

Create on folder routes.js and inside it create auth.route.js and other.

npm i bcrypt