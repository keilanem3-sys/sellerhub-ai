const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API SellerHub rodando 🚀");
});

app.get("/health", (req, res) => {
  res.send("API rodando 🚀");
});

app.get("/status", (req, res) => {
  res.json({ status: "ok", servidor: "online" });
});

app.get("/users", (req, res) => {
  res.json([{ id: 1, nome: "Usuário teste" }]);
});

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (email === "teste@sellerhub.com" && senha === "123456") {
    return res.json({
      sucesso: true,
      mensagem: "Login realizado com sucesso"
    });
  }

  return res.status(401).json({
    sucesso: false,
    mensagem: "Email ou senha inválidos"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(Servidor rodando na porta ${PORT});
