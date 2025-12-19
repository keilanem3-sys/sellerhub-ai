const express = require("express");
const app = express();

app.use(express.json());

/* ======================
   ROTAS DA API (PRIMEIRO)
====================== */

app.get("/health", (req, res) => {
  res.json({ status: "API rodando 🚀" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, nome: "Usuário teste" }
  ]);
});

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const usuarioTeste = {
    email: "teste@sellerhub.com",
    senha: "123456"
  };

  if (email === usuarioTeste.email && senha === usuarioTeste.senha) {
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

/* ======================
   PÁGINA HTML (POR ÚLTIMO)
====================== */

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Graça Autêntica</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f7f7f7;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          text-align: center;
        }
        h1 { color: #5b2d8b; }
        p { color: #555; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Graça Autêntica ✨</h1>
        <p>Seu aplicativo está no ar com sucesso.</p>
        <p>Em breve novidades 💜</p>
      </div>
    </body>
    </html>
  `);
});

/* ======================
   SERVIDOR
====================== */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
