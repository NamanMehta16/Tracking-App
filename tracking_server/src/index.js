require("./Models/User");
require("./Models/Track");

const auth = require("./middlewear/authreq");

const express = require("express");

const app = express();

const authRoutes = require("./Routes/authRoutes");

const trackRoutes = require("./Routes/trackRoutes");

const bodyp = require("body-parser");

app.use(bodyp.json());

app.use(authRoutes);

app.use(trackRoutes);

const mongoose = require("mongoose");

const mongoUri =
  "mongodb+srv://Naman:naman@cluster0.efri7.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Db connected");
});

app.get("/", auth, (req, res) => {
  res.send(`hi there ${req.user.email} ${req.name}`);
});

app.listen(3000, () => {
  console.log("server started");
});
