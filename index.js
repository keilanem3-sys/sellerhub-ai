const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend SellerHub rodando com sucesso 🚀"
  });
});

app.listen(PORT, () => {
  console.log("Servidor iniciado na porta " + PORT);
});
