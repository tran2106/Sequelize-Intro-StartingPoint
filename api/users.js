const express = require("express");
const router = express.Router();
const { User } = require("../dummy-database");

// GET /api/owners - Get all owners
router.get("/", (req, res, next) => {
  const users = User.findAll();
  res.json(users);
});

// GET /api/owners/:id - Get a single owner
router.get("/:id", (req, res, next) => {
  const user = User.findByPk(req.params.id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.json(user);
});

// POST /api/owners - Create a new owner
router.post("/", (req, res, next) => {
  const { name } = req.body;
  const user = User.create({ name });
  res.status(201).json(user);
});

module.exports = router;
