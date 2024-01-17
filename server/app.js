const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");


// require database connection
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const auth = require("./auth");

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

// register endpoint
app.post("/signup", (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        username: request.body.username,
        email: request.body.email,
        password: hashedPassword,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            username: user.username,
            email: user.email,
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

// login endpoint
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            username: user.username,
            email: user.email,
            token,
          });
        })
        // catch error if password do not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});


// update profile 

app.post("/profile", auth, async (request, response) => {

  // try {
  //   const emailToUpdate = req.params.email;
  //   const update = req.body;
  //   const user = await User.findOne({ email: emailToUpdate });

  //   if (!user) {
  //     return res.status(404).json({ error: "User not found." });
  //   }

  //   if (update.username) {
  //     user.username = update.username;
  //   }
  //   if (update.email) {
  //     if (!emailRegex.test(update.email)) {
  //       throw new Error("Email not provided correctly");
  //     }
  //     user.email = update.email;
  //   }

  //   const updatedUser = await user.save();
  //   res.status(200).json(updatedUser);
  // } catch (error) {
  //   res.status(500).json({ error: "Unable to update the user." });
  // }


  const user =  await User.findById(request.user._id)

  if (user) {
    user.usernamename = request.body.username || user.username;
    user.email = request.body.email || user.email;

    if (request.body.password) {
      user.password = request.body.password;
    }

    const updatedUser = await user.save();

    response.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      username: updatedUser.username,
      email: updatedUser.email,
      token: jwt.sign(
        {
          userId: updatedUser._id,
          userEmail: updatedUser.email,
        },
        "RANDOM-TOKEN",
        { expiresIn: "24h" }
      )
    })
  }
  else {
    response.status(404)
    throw new Error("User not found");
  }
});


// delete profile 

app.delete("/profile", auth, async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ id: req.params._id });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Unable to delete the user." });
    console.log(error.message)
  }
})

// !!!!ESEMPI!!!! come proteggere route con autenticazione

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.send({ message: "You are authorized to access me" });
});

module.exports = app;
