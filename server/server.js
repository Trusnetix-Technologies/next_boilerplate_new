const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// Import Models
require("./models/Movie");
require("./models/User");

// Import Routes
require("./routes/movieRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/authRoutes")(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
