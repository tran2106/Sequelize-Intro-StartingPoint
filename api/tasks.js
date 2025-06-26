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

// Patch a task by id
router.patch("/:id", (req, res) => {
  const task = Task.update(Number(req.params.id), req.body);
  res.json(task);
});

// Delete a task by id
router.delete("/:id", (req, res) => {
  Task.delete(Number(req.params.id));
  res.json({ message: "Task deleted" });
});

// Create a new task
router.post("/", (req, res) => {
  const task = Task.create(req.body);
  res.status(201).json(task);
});

module.exports = router;
