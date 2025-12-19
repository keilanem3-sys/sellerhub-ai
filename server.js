const express = require("express");
// const { Pool } = require("pg"); // descomentaremos depois, quando for usar banco

const app = express();
app.use(express.json());

/* =========================
   ROTAS BÁSICAS
========================= */

app.get("/", (req, res) => {
  res.send("API SellerHub rodando 🚀");
});

app.get("/health", (req, res) => {
  res.send("API rodando 🚀");
});

app.get("/status", (req, res) => {
  res.json({ status: "ok", servidor: "online" });
});

/* =========================
   LOGIN (USUÁRIO TESTE)
========================= */

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const usuarioTeste = {
    email: "teste@sellerhub.com",
    senha: "123456"
  };

  if (email === usuarioTeste.email && senha === usuarioTeste.senha) {
    return res.status(200).json({
      sucesso: true,
      mensagem: "Login realizado com sucesso"
    });
  }

  return res.status(401).json({
    sucesso: false,
    mensagem: "Email ou senha inválidos"
  });
});

/* =========================
   USUÁRIOS (TESTE)
========================= */

app.get("/users", (req, res) => {
  res.json([
    { id: 1, nome: "Usuário teste" }
  ]);
});

/* =========================
   SERVIDOR
========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
