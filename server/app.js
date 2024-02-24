const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// IMPORT PROVVISORI

const Item = require('./db/models/itemModel');
const itemController = require('./controllers/itemControllers');
const usersController = require('./controllers/usersControllers');


// require database connection
const dbConnect = require("./db/dbConnect");
const User = require("./db/models/userModel");

app.use(cors({
}));

// execute database connection
dbConnect();

// Curb Cores Error by adding a header
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

// ITEMS ROUTES PROVVISORIE - DA SPOSTARE

// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, "uploads/")
//     },
//     filename: (req, file, callback) => {
//         callback(null, file.originalname);
//     }
// })

// const upload = multer({storage: storage});


app.get('/items', itemController.get_items);
// app.post('/items', upload.any(), itemController.post_item);
app.post('/items', itemController.post_item);
app.put('/items/:id', itemController.update_item);
app.delete('/items/:id', itemController.delete_item);


// USERS ROUTES PROVVISORIE - DA SPOSTARE

app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.put('/update', usersController.update);


module.exports = app;
