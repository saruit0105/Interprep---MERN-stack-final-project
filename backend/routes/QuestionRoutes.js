const express = require("express");
const router = express.Router;
const Question = require("../models/Question");

router.get("/getQuestions", async (req, res, next) => {
  try {
    const questions = await Question.find({ catagory });
  } catch (err) {
    next(err);
  }
});
