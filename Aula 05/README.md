# Aula 05 - Middlewares no Express.js

Nesta aula, vamos explorar o conceito de middlewares no Express.js e entender como eles podem ser utilizados para processar requisições e respostas.

## 1. O que são Middlewares?

Middlewares são funções que interceptam as requisições antes de elas chegarem às rotas finais. Eles permitem:

- Executar código para cada requisição.
- Modificar a requisição e a resposta.
- Encerrar o ciclo de requisição/resposta.
- Chamar o próximo middleware na cadeia.

## 2. Criando e Utilizando Middlewares

Você pode criar um middleware simplesmente definindo uma função com os parâmetros (req, res, next). Confira o exemplo abaixo:

```javascript
// Middleware para registrar o horário de cada requisição
function registrarHorario(req, res, next) {
  console.log(`Requisição recebida em: ${new Date().toISOString()}`);
  next(); // Chama o próximo middleware ou rota
}

const express = require("express");
const app = express();

// Aplicando o middleware globalmente
app.use(registrarHorario);

app.get("/", (req, res) => {
  res.send("Bem-vindo à página inicial!");
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
```

## 3. Middlewares Embutidos e de Terceiros

### Middlewares Embutidos

O Express oferece alguns middlewares de forma integrada, como:

- express.json(): Converte o corpo da requisição em objeto JSON.
- express.urlencoded(): Processa formulários enviados por meio de `application/x-www-form-urlencoded`.
- express.static(): Servir arquivos estáticos.

Exemplo:

```javascript
const express = require("express");
const app = express();

// Middleware para interpretar JSON do corpo da requisição
app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static("public"));

app.post("/dados", (req, res) => {
  res.send(`Dados recebidos: ${JSON.stringify(req.body)}`);
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
```

### Middlewares de Terceiros

Além dos middlewares embutidos, você pode utilizar middlewares criados por terceiros para funcionalidades específicas. Alguns exemplos incluem:

- morgan: Para logging de requisições.
- helmet: Para ajudar a proteger sua aplicação configurando cabeçalhos HTTP.
- cors: Para habilitar requisições de diferentes origens.

### Exemplo de uso do middleware "morgan" para log das requisições em uma aplicação Express.

Detalhamento:

- Importação das bibliotecas necessárias: 'express' para criar a aplicação web e 'morgan' para logar as requisições HTTP.
- Criação da instância da aplicação Express.
- Configuração do middleware "morgan" utilizando o formato 'combined'. Esse formato inclui detalhes como o endereço IP do cliente, método HTTP, URL, status da resposta, tamanho da resposta, tempo de resposta, e outros dados relevantes.
- Aplicação do middleware com app.use(), para interceptar e logar todas as requisições recebidas pela aplicação.
- Definição de uma rota GET ('/') que retorna uma mensagem simples, demonstrando que o middleware está em ação.
- Inicialização do servidor para ouvir a porta 3001, com uma mensagem de log no console confirmando que o servidor está em execução e pronto para receber requisições.

### Exemplo utilizando morgan:

```javascript
const express = require("express");
const morgan = require("morgan");
const app = express();

// Middleware de terceiros para log das requisições
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Middleware morgan em ação!");
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
```

Com esses conceitos, você pode reforçar a configuração e segurança da sua aplicação Express, criando uma cadeia de tratamentos customizados para as suas requisições.
