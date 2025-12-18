const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// rota principal
app.get("/", (req, res) => {
  res.send("App rodando com sucesso 🚀");
});

// iniciar servidor
app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
