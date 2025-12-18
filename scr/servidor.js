const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Servidor SellerHub rodando com sucesso 🚀");
});

app.listen(PORT, () => {
  console.log(Servidor iniciado na porta ${PORT});
});
