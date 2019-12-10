const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  admin: { type: Boolean, default: false },
  campus: {
    type: String,
    enum: [
      "Madrid",
      "Barcelona",
      "Miami",
      "Paris",
      "Berlin",
      "Amsterdam",
      "Mexico",
      "Sao Paulo",
      "Lisbon"
    ]
  },
  course: { type: String, enum: ["WebDev", "UX/UI", "Data Analytics"] },
  image: String
});

const User = mongoose.model("User", userSchema);
module.exports = User;
