const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

// 🔹 ROTA DE SAÚDE (Railway)
app.get("/", (req, res) => {
  res.status(200).send("API SellerHub rodando 🚀");
});

// 🔹 ROTA STATUS (JSON)
app.get("/status", (req, res) => {
  res.status(200).json({
    status: "ok",
    app: "SellerHub",
    online: true
  });
});

// 🔹 ROTA USERS (teste)
app.get("/users", (req, res) => {
  res.status(200).json({
    users: [],
    message: "Rota de usuários funcionando"
  });
});

// 🚀 SERVIDOR
app.listen(PORT, "0.0.0.0", () => {
  console.log(Servidor rodando na porta ${PORT});
});
