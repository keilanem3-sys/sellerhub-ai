const express = require("express");
const pool = require("./db"); // 👈 USA O DB.JS

const app = express();
app.use(express.json());

// ===============================
// TESTE DE VIDA
// ===============================
app.get("/health", (req, res) => {
  res.json({ status: "ok", api: "online" });
});

// ===============================
// USERS
// ===============================
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM users ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("ERRO USERS:", error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("ERRO POST USERS:", error);
    res.status(500).json({ error: error.message });
  }
});

// ===============================
// SERVIDOR
// ===============================
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
