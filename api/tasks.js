const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  // Replace this with your code!
  res.status(501).send("Not implemented");
});

// GET a single task by id

// Patch a task by id

// Delete a task by id

// Create a new task

module.exports = router;
