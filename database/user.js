const { DataTypes } = require("sequelize");
const db = require("./db");

// TASK 2: Define the User model here
const User = db.define("user", {
  // You should define the following columns:
  // - name: string, required
  name: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = User;
