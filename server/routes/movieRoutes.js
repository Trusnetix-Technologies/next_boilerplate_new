const data = require("../data/products");
const mongoose = require("mongoose");
const Movie = mongoose.model("movies");

module.exports = (app) => {
  // Add Movie
  app.post("/api/v1/movie/add", async (req, res) => {
    console.log("Add Movie");
    const { name, duration, director, description, genre, image, score } =
      req.body;
    try {
      const movie = await Movie.findOne({ name }); // Check if user already exists
      if (movie) {
        return res.status(400).json({ message: "Movie already exists" });
      }
      movieFields = {
        name,
        duration,
        director,
        description,
        genre,
        image,
        score,
      };
      const response = await Movie.create(movieFields);
      res.status(201).json({ message: "Movie added successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });

  //   something.com/login.php?id=23
  // Get One Specific Movie
  app.get("/api/v1/get/movie/:id", async (req, res) => {
    const { id } = req.params;
    const response = await Movie.findById(id);
    res.status(200).json({ message: "User fetched successfully", response });
  });

  // Get All Movies
  app.get("/api/v1/get/movies", async (req, res) => {
    try {
      const response = await Movie.find().populate("director", "name phone");
      res
        .status(200)
        .json({ message: "Movies fetched successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });

  // Update Movie Info
  app.put("/api/v1/update/movie/:id", async (req, res) => {
    const { id } = req.params;
    const { name, phone } = req.body;
    try {
      const response = await Movie.updateOne({ _id: id }, { name, phone });
      res.status(200).json({ message: "User updated successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });

  // Delete Movie
  app.delete("/api/v1/delete/movie/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const response = await Movie.findByIdAndDelete(id);
      res.status(200).json({ message: "User deleted successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });

  // TEST
  app.get("/api/test", (req, res) => {
    console.log("Get Products");
    res.json({ message: "Products: ", data });
  });
};
