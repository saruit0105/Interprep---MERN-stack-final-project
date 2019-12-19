const { Schema, model } = require("mongoose");

const openQuestionSchema = new Schema({
  question: String,
  answer: Array
});

const Openquestion = model("Openquestion", openQuestionSchema);
module.exports = Openquestion;
