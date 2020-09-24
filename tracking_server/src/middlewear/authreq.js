const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = (req, res, next) => {
  var auth = req.headers.authentication;

  if (!auth) {
    console.log("Error in Hearder Auth");
  } else {
    const token = auth.replace("Bearer ", "");

    jwt.verify(token, "secretkey", async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const userId = result.userId;
        const name = result.email;

        const user = await User.findById(userId);
        req.user = user;
        next();
      }
    });
  }
};
