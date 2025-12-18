const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("App rodando com sucesso 🚀");
});

app.listen(PORT, () => {
  console.log(Servidor iniciado na porta ${PORT});
});
require("./escr/servidor");
