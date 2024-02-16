const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
  // username field
  username: {
    type: String,
    required: true,
    unique: false,
  },
  
  // email field
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  //   password field
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },

  admin: {
    type: Boolean
  }
});

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
