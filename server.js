const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

// HEALTH CHECK
app.get("/", (req, res) => {
  res.status(200).send("API SellerHub rodando 🚀");
});

// STATUS
app.get("/status", (req, res) => {
  res.status(200).json({
    status: "ok",
    app: "SellerHub",
    online: true
  });
});

// USERS (rota de teste)
app.get("/users", (req, res) => {
  res.status(200).json({
    message: "Rota de usuários funcionando"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
