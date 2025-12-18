const express = require("express");
const { Pool } = require("pg");

const app = express();

// Conexão com o banco (Railway já injeta a variável DATABASE_URL)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Teste de conexão + criação de tabela
async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
      );
    `);
    console.log("Banco conectado e tabela criada com sucesso 🚀");
  } catch (err) {
    console.error("Erro ao conectar no banco:", err);
  }
}

initDB();

// Rota de teste
app.get("/", (req, res) => {
  res.send("Backend SellerHub rodando com sucesso 🚀");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(Servidor iniciado na porta ${PORT});
});
