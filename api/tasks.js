const express = require("express");
const router = express.Router();
const { Task, User } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  const tasks = Task.findAll();
  res.json(tasks);
});

// GET a single task by id
router.get("/:id", (req, res) => {
  const task = Task.findByPk(req.params.id);
  res.json(task);
});

module.exports = router;
