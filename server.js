const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123_456",
  database: "cristiano_ronaldo",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL!");
  }
});

app.get("/stats", (req, res) => {
  const query = "SELECT * FROM cr7_stats";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      res.status(500).json({ error: "Erro ao buscar os dados." });
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
