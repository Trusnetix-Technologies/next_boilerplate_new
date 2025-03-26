const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  phone: { type: String },
});

mongoose.model("users", userSchema);
