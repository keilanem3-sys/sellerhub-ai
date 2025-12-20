const express = require("express");
const app = express();

const pool = require("./db");

const PORT = process.env.PORT || 8080;

// Middleware para JSON
app.use(express.json());

// Rota raiz
app.get("/", (req, res) => {
  res.status(200).send("API SellerHub rodando 🚀");
});

// Rota status
app.get("/status", (req, res) => {
  res.status(200).json({
    status: "ok",
    app: "SellerHub",
    online: true
  });
});

// Rota users (base real)
app.get("/users", (req, res) => {
  res.status(200).json({
    users: [],
    message: "Rota /users funcionando corretamente"
  });
});

// Servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
