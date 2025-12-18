const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

router.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      status: "ok",
      hora: result.rows[0]
    });
  } catch (err) {
    res.status(500).json({
      erro: err.message
    });
  }
});

module.exports = router;
