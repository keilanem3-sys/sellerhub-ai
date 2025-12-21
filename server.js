const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

// ===============================
// CONEXÃO COM O BANCO (PUBLIC URL)
// ===============================
const pool = new Pool({
  connectionString: process.env.DATABASE_PUBLIC_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// ===============================
// TESTA CONEXÃO E CRIA TABELA
// ===============================
async function initDatabase() {
  try {
    await pool.query("SELECT 1");
    console.log("✅ Banco conectado com sucesso");

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log("✅ Tabela users criada/verificada com sucesso");
  } catch (error) {
    console.error("❌ ERRO BANCO:", error);
  }
}

initDatabase();

// ===============================
// ROTAS
// ===============================
app.get("/health", (req, res) => {
  res.json({ status: "ok", api: "online" });
});

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
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
    console.error(error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

// ===============================
// SERVIDOR
// ===============================
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
