const express = require("express");
const router = express.Router();
const { User } = require("../dummy-database");

// GET /api/users - Get all users
router.get("/", (req, res, next) => {
  const users = User.findAll();
  res.json(users);
});

// GET /api/users/:id - Get a single user
router.get("/:id", (req, res, next) => {
  const user = User.findByPk(req.params.id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.json(user);
});

// POST /api/users - Create a new user
router.post("/", (req, res, next) => {
  const { name } = req.body;
  const user = User.create({ name });
  res.status(201).json(user);
});

module.exports = router;
