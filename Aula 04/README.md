# Aula 04 - Criando Rotas com Express.js

Nesta aula, vamos explorar mais sobre a criação de rotas no Express.js. Vamos entender o que são rotas, como criar rotas básicas, e como utilizar parâmetros de rota e query strings.

## 1. O que são Rotas?

Rotas são os caminhos definidos no servidor que respondem a solicitações HTTP específicas. Cada rota pode executar uma função específica quando acessada.

## 2. Criando Rotas Básicas

Vamos criar algumas rotas básicas para entender como elas funcionam.

### Rota de Boas-vindas

```javascript
aplicativo.get('/', (requisicao, resposta) => {
    resposta.send('Bem-vindo ao nosso servidor Express!');
});
```

### Rota de Sobre

```javascript
aplicativo.get('/sobre', (requisicao, resposta) => {
    resposta.send('Esta é a página sobre.');
});
```

## 3. Parâmetros de Rota

Parâmetros de rota são segmentos de URL que podem variar e são usados para capturar valores específicos.

### Rota com Parâmetro

```javascript
aplicativo.get('/usuarios/:id', (requisicao, resposta) => {
    const { id } = requisicao.params;
    resposta.send(`Usuário com ID: ${id}`);
});
```

## 4. Query Strings

Query strings são pares chave-valor anexados à URL após um ponto de interrogação (`?`). Elas são usadas para passar dados adicionais na solicitação.

### Rota com Query Strings

```javascript
aplicativo.get('/pesquisa', (requisicao, resposta) => {
    const { termo } = requisicao.query;
    resposta.send(`Resultados da pesquisa para: ${termo}`);
});
```

## 5. Exemplos de Uso das Rotas

### Rota de Boas-vindas

- **GET** `http://localhost:3001/`

### Rota de Sobre

- **GET** `http://localhost:3001/sobre`

### Rota com Parâmetro

- **GET** `http://localhost:3001/usuarios/123`

### Rota com Query Strings

- **GET** `http://localhost:3001/pesquisa?termo=express`

Com essas rotas, você pode criar caminhos dinâmicos e responder a diferentes tipos de solicitações no seu servidor Express.

## 6. Estrutura MVC

Para organizar seu projeto Express.js em uma estrutura MVC (Model-View-Controller), você pode seguir a seguinte estrutura de diretórios:

```
/crud_express
│
├── /controllers
│   ├── produtoController.js
│   └── usuarioController.js
│
├── /models
│   ├── produtoModel.js
│   └── usuarioModel.js
│
├── /routes
│   ├── produtoRoutes.js
│   └── usuarioRoutes.js
│
├── /views
│   └── index.ejs
│
├── app.js
└── package.json
```

### Exemplo de MVC com Módulos

#### Produto Model (`/models/produtoModel.js`)

```javascript
class Produto {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

module.exports = Produto;
```

#### Produto Controller (`/controllers/produtoController.js`)

```javascript
const Produto = require('../models/produtoModel');

exports.listarProdutos = (req, res) => {
    // Lógica para listar produtos
    res.send('Lista de produtos');
};

exports.obterProduto = (req, res) => {
    const { id } = req.params;
    // Lógica para obter um produto pelo ID
    res.send(`Produto com ID: ${id}`);
};
```

#### Produto Routes (`/routes/produtoRoutes.js`)

```javascript
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/produtos', produtoController.listarProdutos);
router.get('/produtos/:id', produtoController.obterProduto);

module.exports = router;
```

### Integrando as Rotas no `app.js`

```javascript
const express = require('express');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');

app.use('/', produtoRoutes);

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
```

Com essa estrutura, você pode organizar seu código de forma modular e escalável, facilitando a manutenção e o desenvolvimento de novas funcionalidades.
