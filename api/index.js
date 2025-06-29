const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const tasksRouter = require("./tasks");

router.use("/tasks", tasksRouter);
router.use("/users", usersRouter);

module.exports = router;
