const mongoose = require("mongoose");

const Movie = mongoose.model("movies");

module.exports = (app) => {
  app.get("/test", (req, res) => {
    console.log("Hi there!");
    res.send("Hi there! Also, Yay!");
  });

  app.get("/api/v1/get/movies", async (req, res) => {
    console.log("Movies List");
    const response = await Movie.find();
    res.send(response);
  });

  app.post("/api/v1/add/movie", async (req, res) => {
    const { name, director, duration, genre, description, score, image } =
      req.body;

    try {
      const movieFields = {
        name,
        director,
        duration,
        genre,
        description,
        score,
        image,
      };

      const response = await Movie.create(movieFields);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete("/api/v1/delete/movie/:id", async (req, res) => {
    const { id } = req.params;
    const response = await Movie.findByIdAndDelete(id);
    res.status(200).json(response);
  });

  app.put("/api/v1/update/movie/:id", async (req, res) => {
    const { id } = req.params;
    const { name, director, duration, genre, description, score, image } =
      req.body;
    const response = await Movie.findByIdAndUpdate(id, {
      name,
      director,
      duration,
      genre,
      description,
      score,
      image,
    });
    res.status(200).json(response);
  });

  app.get("/api/v1/get/movie/:id", async (req, res) => {
    const { id } = req.params;
    const response = await Movie.findById(id);
    res.status(200).json(response);
  });
};
