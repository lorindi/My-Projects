cd api
npm init -y

package.json => "type":"module", => import a from './b' replaces const a = require("b")

npm i express

*node app.js
-------OR-------
*npm i -D nodemon
*nodemon app.js
-------OR-------
'*console-ninja node --watch app.js'  with extension Console Ninja
-------OR-------
"scripts": {
"start": "nodemon app.js"
},
*npm start

REACT APP --> (req) --> EXPRESS API  --> PRISMA --> MONGODB
REACT APP <-- (res) <-- EXPRESS API  <-- PRISMA <-- MONGODB

Create on folder routes.js and inside it create auth.route.js and other.

npm i mongoose bcrypt jsonwebtoken
npm install cors
npm install validator
npm i cookie-parser
