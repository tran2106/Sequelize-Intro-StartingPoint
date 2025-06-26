const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  const tasks = Task.findAll();
  res.json(tasks);
});

// GET a single task by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = Task.findByPk(id);
  if (!task) {
    return res.status(404).send("Task not found");
  }
  res.json(task);
});

// PATCH a task by id 
router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updatedTask = Task.update(id, req.body);
    res.json(updatedTask);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// DELETE a task by id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  try {
    Task.delete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// CREATE a new task
router.post("/", (req, res) => {
  const newTask = Task.create(req.body);
  res.status(201).json(newTask);
});


module.exports = router;