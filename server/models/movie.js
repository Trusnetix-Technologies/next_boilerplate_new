const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  genre: { type: String },
  director: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  score: { type: String },
  duration: { type: String },
});

mongoose.model("movies", movieSchema);
