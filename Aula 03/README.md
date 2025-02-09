# Aula 03 - CRUD com Express

Nesta aula, vamos expandir nosso servidor Express para incluir todas as operações CRUD (Create, Read, Update, Delete) para gerenciar produtos. Vamos adicionar rotas para atualizar e deletar produtos, além de melhorar a estrutura do nosso código.

## 1. Importação das Bibliotecas

```javascript
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
```

## 2. Configuração das Variáveis de Ambiente

```javascript
const port = process.env.PORTA;
```

## 3. Inicialização do Servidor

```javascript
const aplicativo = express();
aplicativo.use(express.json());
```

## 4. Banco de Dados Simulado

```javascript
const banco_dados = [];
```

## 5. Definição das Rotas

### Listar Produtos

```javascript
aplicativo.get('/produtos', (requisicao, resposta) => {
    resposta.json(banco_dados);
});
```

### Cadastrar Produto

```javascript
aplicativo.post('/produtos', (requisicao, resposta) => {
    const { id, nome, preco } = requisicao.body;
    const novoProduto = { id, nome, preco };
    banco_dados.push(novoProduto);
    resposta.status(201).json({ mensagem: "Produto criado com sucesso" });
});
```

### Atualizar Produto

```javascript
aplicativo.put('/produtos/:id', (requisicao, resposta) => {
    const { id } = requisicao.params;
    const { nome, preco } = requisicao.body;
    const produto = banco_dados.find(p => p.id == id);
    if (produto) {
        produto.nome = nome;
        produto.preco = preco;
        resposta.json({ mensagem: "Produto atualizado com sucesso" });
    } else {
        resposta.status(404).json({ mensagem: "Produto não encontrado" });
    }
});
```

### Deletar Produto

```javascript
aplicativo.delete('/produtos/:id', (requisicao, resposta) => {
    const { id } = requisicao.params;
    const index = banco_dados.findIndex(p => p.id == id);
    if (index !== -1) {
        banco_dados.splice(index, 1);
        resposta.json({ mensagem: "Produto deletado com sucesso" });
    } else {
        resposta.status(404).json({ mensagem: "Produto não encontrado" });
    }
});
```

## 6. Inicialização do Servidor

```javascript
aplicativo.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```

## Exemplos de Uso das Rotas

### Listar Produtos

- **GET** `http://localhost:3001/produtos`

### Cadastrar Produto

- **POST** `http://localhost:3001/produtos`
    - Header: `Content-Type: application/json`
    - Corpo:
        ```json
        {
            "id": 1,
            "nome": "GTX 4090 24gb",
            "preco": 14450
        }
        ```

### Atualizar Produto

- **PUT** `http://localhost:3001/produtos/1`
    - Header: `Content-Type: application/json`
    - Corpo:
        ```json
        {
            "nome": "GTX 4090 24gb - Atualizada",
            "preco": 14500
        }
        ```

### Deletar Produto

- **DELETE** `http://localhost:3001/produtos/1`

Com essas rotas, você pode realizar todas as operações CRUD para gerenciar produtos no seu servidor Express.