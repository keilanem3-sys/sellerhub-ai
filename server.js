const express = require("express");
const app = express();

// importar rotas
const statusRoutes = require("./rotas/status");

const PORT = process.env.PORT || 3000;

// rota principal
app.get("/", (req, res) => {
  res.send("Servidor rodando com sucesso 🚀");
});

// usar rotas
app.use("/", statusRoutes);

app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
