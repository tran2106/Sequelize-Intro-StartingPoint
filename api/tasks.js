const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.send(tasks);
  } catch (err) {
    console.log("WE CAUGHT AN ERROR");
    console.error(err);
  }
});

// GET a single task by id

// Patch a task by id

// Delete a task by id

// Create a new task
router.post("/", async (req, res) => {
  try {
    await Task.create({
      title: "Deploy to Vercel / Neon",
    });
    res.sendStatus(201);
  } catch (err) {
    console.log("WE CAUGHT AN ERROR");
    console.error(err);
  }
});

module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js
