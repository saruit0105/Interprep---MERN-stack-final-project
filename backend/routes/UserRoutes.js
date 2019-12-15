const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { Types } = require("mongoose");

//sign up
router.post("/signup", async (req, res, next) => {
  try {
    const { body } = req;
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(body.password, salt);
    const user = await User.create({ ...body, password });
    res.send({ message: "success", user });
  } catch (err) {
    next(err);
  }
});

//login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate("followers");
    if (!user) {
      res.send({
        message: "email not found,please check and try again!",
        code: 1
      });
      return;
    }
    const isAuthenticated = bcrypt.compareSync(password, user.password || "");
    if (!isAuthenticated) {
      return res.send({
        errorMessage: "incorrect password, please try again",
        code: 1
      });
    }
    req.session.currentUser = user;
    res.send(user);
  } catch (err) {
    next(err);
  }
});

//update user

router.post("/update", async (req, res, next) => {
  try {
    const id = req.currentUser._id;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true
    });
    res.send({ message: "Success!", user: updatedUser });
  } catch (err) {
    next(err);
  }
});

//login info
router.get("/get-user-info", async (req, res) => res.send(req.session.currentUser || null));

router.get("/users", async (_, res) => {
  const users = await User.find();
  const sortedUsers = users.sort((a, b) => {
    const aValue = a.points;
    const bValue = b.points;
    if (aValue === bValue) return 0;
    return aValue > bValue ? 1 : -1;
  });
  res.send(sortedUsers);
});

router.post("/users/follow", (req, res) => {
  const { idToFollow, currentUserId } = req.body;
  User.findOne({ _id: idToFollow }, async (_, doc) => {
    doc.followers = [...doc.followers, currentUserId];
    await doc.save();
    res.send(doc);
  });
});
//logout
router.post("/logout", async (req, res) => {
  await req.session.destroy();
  res.json({ message: "success" });
});

module.exports = router;
