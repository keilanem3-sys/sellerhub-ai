import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    app: "SellerHub AI",
    status: "online",
    message: "Servidor rodando com sucesso 🚀"
  });
});

app.listen(PORT, () => {
  console.log(Servidor iniciado na porta ${PORT});
});
