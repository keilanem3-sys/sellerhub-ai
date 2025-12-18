const express = require("express");
const app = express();

const statusRoute = require("./routes/status");

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// rota principal
app.get("/", (req, res) => {
  res.send("Servidor SellerHub rodando 🚀");
});

// rota de status
app.use("/status", statusRoute);

// iniciar servidor
app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
