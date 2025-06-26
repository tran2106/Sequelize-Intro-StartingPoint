const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const apiRouter = require("./api");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

// body parser middleware
app.use(express.json());

// CORS
// app.use( // only allow requests from our frontend
//   cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:3000",
//     credentials: true,
//   })
// );
app.use(cors()); // allow all origins

app.use(morgan("dev")); // logging middleware
app.use(express.static(path.join(__dirname, "public"))); // serve static files from public folder
app.use("/api", apiRouter); // mount api router

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

module.exports = app;
