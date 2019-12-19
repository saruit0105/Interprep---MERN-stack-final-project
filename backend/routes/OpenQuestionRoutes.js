const express = require("express");
const router = express.Router();
const Openquestion = require("../models/OpenQuestion");

router.get("/getOpenQuestions", async (_, res, next) => {
  try {
    const OpenQuestions = await Openquestion.find();
    res.send(OpenQuestions);
    console.log(OpenQuestions);
  } catch (err) {
    res.send({ err });
  }
});

module.exports = router;
