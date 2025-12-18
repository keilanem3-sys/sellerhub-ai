const express = require("express");
const app = express();

const statusRoutes = require("./routes/status");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Servidor rodando com sucesso 🚀");
});

// 🔥 AQUI está a parte importante
app.use("/status", statusRoutes);

app.listen(PORT, () => {
  console.log("Servidor iniciado na porta", PORT);
});
