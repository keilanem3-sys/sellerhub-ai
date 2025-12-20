const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

// ROTA DE SAÚDE
app.get("/", (req, res) => {
  res.status(200).send("API SellerHub rodando 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
