const express = require("express");
const router = express.Router();
const { User, Task } = require("../dummy-database");

// GET a user by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = User.findByPk(id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json(user);
});

// GET all tasks for a specific user
router.get("/:id/tasks", (req, res) => {
  const id = Number(req.params.id);
  const tasks = Task.findAll().filter((task) => task.userId === id);
  res.json(tasks);
});

// CREATE a new user
router.post("/", (req, res) => {
  const newUser = User.create(req.body);
  res.status(201).json(newUser);
});

// UPDATE a user by id
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  try {
    const updatedUser = User.update(id, req.body);
    res.json(updatedUser);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

// DELETE a user and their tasks
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  try {
    User.delete(id);
    Task.findAll()
      .filter((task) => task.userId === id)
      .forEach((task) => Task.delete(task.id));
    res.sendStatus(204);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
