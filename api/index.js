const express = require("express");
const router = express.Router();
const tasksRouter = require("./tasks");
const usersRouter = require("./users");

router.use("/tasks", tasksRouter);
router.use("/users", usersRouter);

module.exports = router;
