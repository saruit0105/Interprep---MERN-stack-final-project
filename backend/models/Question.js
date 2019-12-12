const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: String,
  answers: Array,
  solution: String,
  explaination: String,
  catagory: String
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
