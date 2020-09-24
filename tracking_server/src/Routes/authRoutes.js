const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const User = mongoose.model("User");

const bcrypt = require("bcrypt");

router.post("/sign-up", async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    const user = new User({
      email: email,
      password: hash,
    });
    user.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("inserted");
      }
    });
    const token = jwt.sign({ userId: user._id }, "secretkey");
    res.send({ token });
  });
});

router.post("/sign-in", async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email, password);
  await User.findOne({ email }, (err, result) => {
    if (err) {
      console.log("hi");
    } else {
      bcrypt.compare(password, result.password, (err, results) => {
        if (results === true) {
          console.log("correct");
          const token = jwt.sign({ userId: result._id }, "secretkey");
          res.send({ token });
        } else {
          console.log("wrong");
        }
      });
    }
  });
});

module.exports = router;
