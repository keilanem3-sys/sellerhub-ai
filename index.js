const express = require("express");
const app = express();

// Railway define a porta automaticamente
const PORT = process.env.PORT || 8080;

// Rota principal
app.get("/", (req, res) => {
  res.send("App rodando com sucesso 🚀");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(Servidor iniciado na porta ${PORT});
});
