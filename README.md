# 📝 Task API

API RESTful para gerenciamento de tarefas, construída com **Node.js** e **Express**.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Joi](https://joi.dev/) — validação de dados
- [Helmet](https://helmetjs.github.io/) — segurança HTTP
- [CORS](https://www.npmjs.com/package/cors) — controle de origens
- [Morgan](https://www.npmjs.com/package/morgan) — logging de requisições
- [dotenv](https://www.npmjs.com/package/dotenv) — variáveis de ambiente

## 📁 Estrutura do Projeto

```
├── app.js
├── routes/
│   └── taskRoutes.js
├── controllers/
│   └── taskController.js
├── middlewares/
│   └── validate.js
├── schemas/
│   └── taskSchema.js
└── .env
```

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Entre na pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install
```

## 🔧 Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
```

## ▶️ Executando

```bash
# Desenvolvimento
node app.js

# Com nodemon (recomendado)
npx nodemon app.js
```

O servidor estará disponível em `http://localhost:3000`.

## 📡 Endpoints

Base URL: `/api`

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/` | Lista todas as tarefas |
| `GET` | `/api/:id` | Busca uma tarefa pelo ID |
| `POST` | `/api/` | Cria uma nova tarefa |
| `PUT` | `/api/:id` | Atualiza uma tarefa existente |
| `DELETE` | `/api/:id` | Remove uma tarefa |

## 📦 Exemplos de Uso

### Criar uma tarefa

**POST** `/api/`

```json
{
  "titulo": "Estudar Node.js",
  "status": false
}
```

**Resposta (201):**
```json
{
  "message": "tarefa criada",
  "data": {
    "id": 1714300000000,
    "titulo": "Estudar Node.js",
    "status": false
  }
}
```

### Listar todas as tarefas

**GET** `/api/`

**Resposta (200):**
```json
{
  "data": [
    {
      "id": 1714300000000,
      "titulo": "Estudar Node.js",
      "status": false
    }
  ]
}
```

### Buscar por ID

**GET** `/api/1714300000000`

**Resposta (200):**
```json
{
  "data": {
    "id": 1714300000000,
    "titulo": "Estudar Node.js",
    "status": false
  }
}
```

### Atualizar uma tarefa

**PUT** `/api/1714300000000`

```json
{
  "titulo": "Estudar Node.js e Express",
  "status": true
}
```

**Resposta (200):**
```json
{
  "message": "tarefa atualizada",
  "data": {
    "id": 1714300000000,
    "titulo": "Estudar Node.js e Express",
    "status": true
  }
}
```

### Remover uma tarefa

**DELETE** `/api/1714300000000`

**Resposta (200):**
```json
{
  "message": "tarefa removida"
}
```

## ✅ Validação

Os campos aceitos no body das rotas `POST` e `PUT` são validados com **Joi**:

| Campo | Tipo | Regras | Obrigatório |
|-------|------|--------|-------------|
| `titulo` | `string` | mín. 2 e máx. 100 caracteres | ✅ Sim |
| `status` | `boolean` | padrão: `false` | ❌ Não |

Em caso de dados inválidos, a API retorna `400 Bad Request` com a mensagem de erro.

## ⚠️ Observação

Os dados são armazenados **em memória** (array). Ao reiniciar o servidor, todas as tarefas são perdidas. Para persistência, considere integrar um banco de dados como **MongoDB**, **PostgreSQL** ou **SQLite**.

## 📄 Licença

Este projeto está sob a licença MIT.
