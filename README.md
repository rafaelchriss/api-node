
```markdown
# 🌟 RestAPI Node 🌟

## 📝 Descrição
Este projeto é uma API RESTful criada com Node.js para gerenciar seleções de futebol.

## 🚀 Tecnologias
- Node.js
- Express.js
- MySql

## 📂 Estrutura do Projeto
```plaintext
├── app
│   ├── controllers
│   │   └── SelecaoController.js
│   ├── database
│   │   └── conexao.js
│   ├── repositories
│   │   └── SelecaoRepository.js
├── app.js
├── package.json
├── package-lock.json
├── routes.js
└── server.js
```

## 📚 Documentação da API
**Base URL:** `http://localhost:3000`

### 🌟 Endpoints
- `GET /selecoes` - Lista todas as seleções.
- `POST /selecoes` - Cria uma nova seleção.
- `GET /selecoes/:id` - Obtém uma seleção pelo ID.
- `PUT /selecoes/:id` - Atualiza uma seleção pelo ID.
- `DELETE /selecoes/:id` - Remove uma seleção pelo ID.

## 🛠️ Como Executar
1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/restapi-node.git
    ```
2. Instale as dependências:
    ```sh
    npm install && npm run dev
    ```
    
4. Inicie o servidor:
    ```sh
    npm start
    ```
