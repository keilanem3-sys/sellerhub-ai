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

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Usuários"');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
