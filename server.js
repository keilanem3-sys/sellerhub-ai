const express = require("express");
// const { Pool } = require("pg");

const app = express();
app.use(express.json());

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
 //  ssl: { rejectUnauthorized: false }
// });
app.get("/", (req, res) => {
  res.send("API SellerHub rodando 🚀");
});
app.get("/health", (req, res) => {
  res.send("API rodando 🚀");
});
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  // usuário teste
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
app.get("/users", (req, res) => {
  res.json([
    { id: 1, nome: "Usuário teste" }
  ]);
});

const PORT = process.env.PORT || 3000;

app.post("/login", (req, res) => {
  // código do login
});

app.listen(PORT, () => {
  console.log("Servidor rodando");
});
app.get("/status", (req, res) => {
  res.json({ status: "ok", servidor: "online" });
});
