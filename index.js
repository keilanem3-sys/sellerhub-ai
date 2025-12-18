const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("App rodando com sucesso 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(Servidor iniciado na porta ${PORT});
});
