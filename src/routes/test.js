const express = require("express");
const router = express.Router();
const pool = require("../../config/db");

router.get("/test", (req, res) => {
  res.json({ message: "API is working" });
});

router.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Database connected successfully",
      time: result.rows[0].now,
    });
  } catch (err) {
    res.status(500).json({
      message: "Database connection error",
      error: err.message,
    });
  }
});

module.exports = router;
