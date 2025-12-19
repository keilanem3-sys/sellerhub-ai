const express = require("express");
// const { Pool } = require("pg");

const app = express();
app.use(express.json());

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
 //  ssl: { rejectUnauthorized: false }
// });

app.get("/health", (req, res) => {
  res.send("API rodando 🚀");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, nome: "Usuário teste" }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
