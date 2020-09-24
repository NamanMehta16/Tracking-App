const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

const Track = mongoose.model("Track");

const authreq = require("../middlewear/authreq");

router.use(authreq);

router.get("/tracks", async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });
  res.send(tracks);
});

router.post("/tracks", (req, res) => {
  const name = req.body.name;
  const locations = req.body.locations;

  const track = new Track({
    userId: req.user._id,
    name: name,
    locations: locations,
  });
  track.save((err) => {
    if (!err) {
      res.send(track);
    }
  });
});

module.exports = router;
