const express = require("express");
const app = express();

const statusRoutes = require("./routes/status");

const PORT = process.env.PORT;

// rota principal
app.get("/", (req, res) => {
  res.send("Servidor rodando com sucesso 🚀");
});

// usar rotas
app.use("/", statusRoutes);

app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
