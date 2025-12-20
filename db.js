const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_PUBLIC_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool
  .connect()
  .then(() => console.log("✅ Banco conectado com sucesso"))
  .catch((err) => console.error("❌ Erro ao conectar no banco:", err));

module.exports = pool;
