const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.URL_DO_BANCO_DE_DADOS,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
