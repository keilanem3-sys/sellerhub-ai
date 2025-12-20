const express = require("express");
const app = express();

const pool = require("./db");

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API SellerHub rodando 🚀");
});

app.get("/status", (req, res) => {
  res.status(200).json({
    status: "ok",
    app: "SellerHub",
    online: true
  });
});

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.URL_DO_BANCO_DE_DADOS,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
