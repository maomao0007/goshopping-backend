const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// Import routes
const indexRoutes = require("./src/routes/index");
const testRoutes = require("./src/routes/test");
const authRoutes = require("./src/routes/auth");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", testRoutes);
app.use("/api/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Something went wrong!" });
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is successfully listening on port ${port}`);
});
