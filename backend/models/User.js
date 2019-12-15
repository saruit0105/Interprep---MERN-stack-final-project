const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  admin: { type: Boolean, default: false },
  image: String,
  linkedin: String,
  github: String,
  points: String,
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }]
});

const User = model("User", userSchema);
module.exports = User;
