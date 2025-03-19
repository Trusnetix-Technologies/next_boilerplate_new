const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, {}).then(() => {
  console.log("Connected to MongoDB succesfully. Double Yay!");
});

// IMPORT MODELS
require("./models/movie");

// IMPORT ROUTES
require("./routes/movieRoutes")(app);

app.listen(port, () => {
  console.log("Server is running. Yay!");
});
