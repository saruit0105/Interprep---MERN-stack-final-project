const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  question: String,
  answers: Array,
  solution: String,
  category: String
});

const Question = model("Question", questionSchema);
module.exports = Question;
