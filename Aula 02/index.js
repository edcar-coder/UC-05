// Importando com (ESM)
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORTA;
const app = express();

app.use(express.json());

const bancoDados = [];

app.get('/produtos', (req, res) => {
  res.json(bancoDados);
});

app.post('/produtos', (req, res) => {
  const { id, nome, preco } = req.body;
  const novoProduto = { id, nome, preco };
  bancoDados.push(novoProduto);
  res.status(201).json({ mensagem: "Produto criado com sucesso" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
