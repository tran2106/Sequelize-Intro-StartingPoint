require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const apiRouter = require("./api");
const { db } = require("./database");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

// body parser middleware
app.use(express.json());

app.use(cors()); // allow all origins

app.use(morgan("dev")); // logging middleware
app.use(express.static(path.join(__dirname, "public"))); // serve static files from public folder
app.use("/api", apiRouter); // mount api router

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const runApp = async () => {
  try {
    await db.sync();
    console.log("✅ Connected to the database");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Unable to connect to the database:", err);
  }
};

runApp();

module.exports = app;
