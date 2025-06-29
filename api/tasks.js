const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database
// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
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
router.patch("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updatedTask = Task.update(id, req.body);
    res.json(updatedTask);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// DELETE a task by id
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    Task.delete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// CREATE a new task
router.post("/", async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js
