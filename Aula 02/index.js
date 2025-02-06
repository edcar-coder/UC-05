//importando o express
const express = require('express');
// Importando a biblioteca dotenv
const dotenv = require('dotenv');

// Carregando as variáveis de ambiente
dotenv.config();
// Criamos a porta
const port = process.env.PORTA
// Criando um objeto chamado app
const aplicativo = express()

// meio termo - middleware
aplicativo.use(express.json());

// VERBOS OU METODOS - HTTP
// Pegar - GET
// Postar - POST
// Atualizar - PUT
// Deletar - DELETE

const banco_dados = [];

// rota - Listar produtos
aplicativo.get('/produtos', (requisicao, resposta) => {
  resposta.json(banco_dados)
})


// rota - Cadastrar produtos
aplicativo.post('/produtos', (requisicao, resposta) => {
    // Passnado na requisição o id, nome e preco
    const {id, nome, preco } = requisicao.body;

    //adicionando a variavel novoProduto os dados que enviei no body(corpo)
    const novoProduto ={id, nome, preco};
    // adicionando ao array banco_dados
    banco_dados.push(novoProduto)
    
    // adicionado uma resposta de sucesso se o recurso ou o produto for criado
    resposta.status(201).json({mensagem:"Produto criado com sucesso"})
  })
  

aplicativo.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

