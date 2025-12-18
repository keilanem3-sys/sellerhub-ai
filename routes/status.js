const express = require("express");
const router = express.Router();

router.get("/status", (req, res) => {
  res.json({
    online: true,
    mensagem: "API funcionando 🚀"
  });
});

module.exports = router;
