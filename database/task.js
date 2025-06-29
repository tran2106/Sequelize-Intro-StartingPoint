const { DataTypes } = require("sequelize");
const db = require("./db");

// TASK 1: Define the Task model here
const Task = db.define("task", {
  // You should define the following columns:
  // - title: string, required
  // - description: string, required
  // - completed: boolean, default false
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //each task have description
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  //track status
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, //falseby default
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Task;
