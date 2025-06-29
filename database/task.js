const { DataTypes } = require("sequelize");
const db = require("./db");

// TASK 1: Define the Task model here
const Task = db.define("task", {
  // title: string, required
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // description: string, required
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // completed: boolean, default false
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Task;
