# Challenge Mgl – Back-end

Este repositório contém o back-end, implementado como uma API RESTful para gerenciamento de **artigos**. A seguir, você encontra:

-  📖 Visão geral do projeto
-  🛠 Tecnologias utilizadas
-  📁 Estrutura do código
-  🚀 Guia de instalação e execução (passo a passo)
-  ✅ Como testar a API
-  ⚙️ CI/CD com GitHub Actions

---

## 📖 Visão Geral

Este serviço expõe endpoints para:

1. Listar todos os artigos
2. Obter um artigo por ID

Internamente ele:

1. Lê variáveis de ambiente via **dotenv**
2. Conecta-se ao **MongoDB Atlas** usando **Mongoose**
3. Define **models**, **controllers** e **routes** para a entidade `Article`
4. Oferece documentação interativa via **Swagger UI**
5. Possui um script de **seed** para popular dados iniciais
6. E também cache (em `src/cache/cache.ts`) para otimizar buscas frequentes

---

## 🛠 Tecnologias

-  **Node.js** v20.18.0
-  **TypeScript**
-  **Express** 5.x
-  **MongoDB Atlas** + **Mongoose**
-  **Swagger** (swagger-jsdoc + swagger-ui-express)
-  **dotenv**, **cors**
-  **ts-node-dev**

---

## 📁 Estrutura do Projeto

```
/
├─ src/
│  ├─ @types/
│  │  └─ swagger-jsdoc.d.ts
│  ├─ cache/
│  │  └─ cache.ts
│  ├─ controllers/
│  │  └─ article.controller.ts
│  ├─ docs/
│  │  └─ swagger.ts
│  ├─ models/
│  │  └─ articles.model.ts
│  ├─ routes/
│  │  └─ articles.routes.ts
│  ├─ utils/
│  │  └─ seed.ts
│  └─ index.ts
├─ utils/
│  └─ mock/
│     └─ db.json
├─ .env
├─ .dockerignore
├─ Dockerfile
├─ docker-compose.yml
├─ package.json
└─ tsconfig.json
```

---

## 🚀 Guia de Instalação e Execução

### 1. Pré-requisitos

-  **Git**

```bash
  git --version   # ex: git version 2.x.x
```

-  **Node.js** v20.18.0 + **npm**

```bash
  node --version  # deve ser v20.18.0
  npm --version   # ex: 9.x.x
```

-  **Docker Desktop** (inclui Docker Compose)

```bash
  docker --version        # ex: Docker version 24.x.x
  docker compose version  # ex: v2.x.x
```

### 2. Clonar o repositório

```bash
git clone https://github.com/BragaHigor/challenge-mgl-back.git
cd challenge-mgl-back
```

### 3. Configurar variáveis de ambiente

Na raiz do projeto, crie um arquivo `.env` com:

```bash
MONGODB_URI=<URI-MongoDB-Atlas>
PORT=8080
FRONTEND_URL=http://localhost:3000
```

### 4. Instalar dependências

```bash
npm install
```

### 5. Executar seed de dados (opcional)

Para popular o banco de dados com dados de exemplo:

```bash
npm run seed
```

### 6. Iniciar o servidor

#### 6.1. Local (Node.js)

-  **Modo desenvolvimento** (reload automático):

```bash
  npm run server
```

-  **Modo produção**:

```bash
  npm run build
  npm start
```

#### 6.2. Com Docker Compose

-  Subir todos os serviços em background:

```bash
  docker compose up --build -d
```

-  Ver logs em tempo real:

```bash
  docker-compose logs -f backend
```

### ✅ 7. Testar a API

-  **Via curl / PowerShell**

```bash
  curl http://localhost:8080/articles
```

Retornar JSON com a lista de artigos.

-  **Via navegador / Postman**

   -  `GET http://localhost:8080/articles`
   -  `GET http://localhost:8080/articles/:id`

-  **Swagger UI**  
   Acesse `http://localhost:8080/api-docs` para a documentação interativa.

---

## ⚙️ CI/CD com GitHub Actions

Este projeto inclui um workflow de CI/CD configurado com **GitHub Actions**. O pipeline executa os seguintes passos:

-  Checkout do código
-  Instalação de dependências (`npm install`)
-  Build do projeto (`npm run build`)

O arquivo de configuração do workflow está localizado em `.github/workflows/ci.yml`.
