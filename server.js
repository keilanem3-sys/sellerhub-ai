const express = require("express");
const app = express();

const statusRoutes = require("./routes/status");

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Servidor rodando 🚀");
});

app.use("/", statusRoutes);

app.listen(PORT, () => {
  console.log("Servidor iniciado");
});
