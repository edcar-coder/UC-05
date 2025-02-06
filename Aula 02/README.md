# Explicação do Código do Servidor com Express

Nesta seção, vamos explorar de maneira detalhada como funciona um servidor simples utilizando Express e dotenv, abordando cada parte do código para que iniciantes possam compreender facilmente.

## 1. Importação das Bibliotecas

- **express**:  
  Esta biblioteca facilita a criação de um servidor web. Ela permite definir rotas, utilizar middlewares e gerenciar respostas HTTP de forma simples e direta.

- **dotenv**:  
  Essa biblioteca é utilizada para carregar variáveis de ambiente de um arquivo `.env`. Isso torna o gerenciamento das configurações (como a porta do servidor) muito mais flexível, pois você não precisa alterar o código para mudar essas configurações.

## 2. Configuração das Variáveis de Ambiente

- **dotenv.config()**:  
  Com essa chamada, o aplicativo carrega as variáveis definidas no arquivo `.env` para a aplicação. Assim, se você precisar alterar a porta ou outras configurações, basta modificar o arquivo `.env`, sem a necessidade de reescrever o código.

## 3. Inicialização do Servidor

- **Definir a Porta**:  
  A constante `port` é definida a partir de uma variável de ambiente (por exemplo, `PORT=3001`), garantindo que o código possa ser facilmente configurado para diferentes ambientes (desenvolvimento, produção).

- **Criar a Instância do Express**:  
  Um objeto `aplicativo` é criado utilizando `express()`. Este objeto será responsável por gerenciar as rotas (caminhos) e os middlewares, que são funções intermediárias no processamento das requisições.

## 4. Configuração do Middleware

- **express.json()**:  
  Ao utilizar `aplicativo.use(express.json())`, o Express é configurado para reconhecer e interpretar requisições cujo corpo está em formato JSON. Isso é essencial para lidar com dados enviados por clientes, como formulários ou requisições de APIs.

## 5. Definição das Rotas

- **GET `/produtos`**:  
  Esta rota é utilizada para listar todos os produtos presentes no `banco_dados`. Quando o servidor receber uma requisição GET na rota `/produtos`, ele responderá com a lista de produtos.

- **POST `/produtos`**:  
  Essa rota permite o cadastro de um novo produto. Ao enviar uma requisição POST com os dados necessários (`id`, `nome` e `preco`) no corpo da requisição, o novo produto é adicionado ao array `banco_dados`. Se a operação for bem-sucedida, o servidor responde com uma mensagem de sucesso e o status HTTP 201 (criado).

## 6. Inicialização do Servidor

- **aplicativo.listen()**:  
  Esse comando inicia o servidor na porta definida anteriormente. O callback passado para `aplicativo.listen(port, () => { ... })` é executado assim que o servidor começa a "escutar" as requisições, permitindo o acesso aos endpoints configurados.

## Exemplos de Uso das Rotas

- **Listar Produtos**:  
  Execute uma requisição GET para:  
  http://localhost:3001/produtos

- **Cadastrar um Produto**:  
  Execute uma requisição POST para:  
  http://localhost:3001/produtos  
  com o header `Content-Type: application/json` e o seguinte corpo:
  
  {
    "id": 1,
    "nome": "GTX 4090 24gb",
    "preco": 14450
  }


