const express = require("express");
const app = express();

const statusRoutes = require("./routes/status");

// 🚨 NUNCA use porta fixa no Railway
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Servidor rodando 🚀");
});

app.use("/", statusRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor iniciado na porta " + PORT);
});
