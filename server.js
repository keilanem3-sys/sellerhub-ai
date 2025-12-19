const express = require("express");
const app = express();

// importar rotas
const statusRoutes = require("./routes/status");

// porta correta para Railway
const PORT = process.env.PORT || 8080;

// rota principal
app.get("/", (req, res) => {
  res.send("Servidor rodando 🚀");
});

// usar rotas
app.use("/", statusRoutes);

// iniciar servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor iniciado na porta", PORT);
});
