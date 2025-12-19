const express = require("express");
const app = express();

const PORT = Number(process.env.PORT);

app.get("/", (req, res) => {
  res.send("Servidor rodando 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor iniciado na porta", PORT);
});
