// CRUD operations for User
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = (app) => {
  // User Registration
  app.post("/api/v1/user/register", async (req, res) => {
    console.log("Register User");
    const { name, phone } = req.body;
    try {
      const user = await User.findOne({ phone }); // Check if user already exists
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }
      userFields = { name, phone };
      const response = await User.create(userFields);
      res.status(201).json({ message: "User created successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });

  //   something.com/login.php?id=23
  // Get One Specific User
  app.get("/api/v1/get/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const response = await User.findById(id);
      res.status(200).json({ message: "User fetched successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });

  // Get All Users
  app.get("/api/v1/get/users", async (req, res) => {
    try {
      const response = await User.find().select("name phone");
      res.status(200).json({ message: "Users fetched successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });
  // Update User Info
  app.put("/api/v1/update/user/:id", async (req, res) => {
    const { id } = req.params;
    const { name, phone } = req.body;
    try {
      const response = await User.updateOne({ _id: id }, { name, phone });
      res.status(200).json({ message: "User updated successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });

  // Delete User
  app.delete("/api/v1/delete/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const response = await User.findByIdAndDelete(id);
      res.status(200).json({ message: "User deleted successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });
};
