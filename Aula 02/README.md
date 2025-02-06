# CRUD Express

Este é um projeto básico de CRUD utilizando Express.js.

## Instalação

1. Clone o repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd crud_express
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Crie um arquivo `.env` na raiz do projeto e defina a porta:
    ```env
    PORTA=porta_que_deseja
    ```

## Uso

Para iniciar o servidor, execute:
```bash
node index.js
```

O servidor estará rodando em `http://localhost:3000` (ou na porta definida no arquivo `.env`).

## Rotas

- `GET /aluno` - Retorna uma mensagem indicando que esta rota é de aluno.
- `GET /professor` - Retorna uma mensagem indicando que esta rota é de professor.

## Código

```javascript
// Importando o express
const express = require('express');
// Importando a biblioteca dotenv
const dotenv = require('dotenv');

// Carregando as variáveis de ambiente
dotenv.config();

// Criando um objeto chamado app
const aplicativo = express()

// Criamos a porta
const port = process.env.PORTA

// VERBOS OU METODOS - HTTP
// Pegar - GET
// Postar - POST
// Atualizar - PUT
// Deletar - DELETE
aplicativo.get('/aluno', (requisicao, resposta) => {
  resposta.send('Essa rota é de aluno')
})

aplicativo.get('/professor', (requisicao, resposta) => {
    resposta.send('Essa rota é de professor')
  })

aplicativo.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
```

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Faça um fork, crie um branch e envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT.














































































