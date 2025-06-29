const express = require("express");
const router = express.Router();
const { User, Task } = require("../database");

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

// GET single user with their tasks
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: Task,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ error: "Failed to retrieve user" });
  }
});

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });

    const user = await User.create({ name });
    res.status(201).json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Failed to create user" });
  }
});

module.exports = router;
