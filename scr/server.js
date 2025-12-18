const express = require("express");
const app = express();

const healthRoute = require("./routes/health");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(healthRoute);

app.get("/", (req, res) => {
  res.send("Servidor SellerHub rodando com sucesso 🚀");
});

app.listen(PORT, () => {
  console.log(Servidor iniciado na porta ${PORT});
});
