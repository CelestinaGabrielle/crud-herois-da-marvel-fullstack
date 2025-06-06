# CRUD Heróis da Marvel - Fullstack

Este projeto é uma aplicação fullstack para cadastro, listagem, edição e remoção de heróis da Marvel, utilizando **React** no frontend, **NestJS** no backend e **MongoDB** como banco de dados.

---

## Tecnologias Utilizadas

- **Frontend:** React + Vite + CSS Modules + Axios
- **Backend:** NestJS + Mongoose
- **Banco de Dados:** MongoDB

---

## Como rodar o projeto

### Pré-requisitos

- Node.js (recomendado: versão 20 LTS)
- npm
- MongoDB rodando localmente (porta padrão 27017) ou via Docker

---
### 1. Rodar o Backend

```sh
cd backend
npm install
# Certifique-se que o MongoDB está rodando!
npm run start
```
O backend estará disponível em `http://localhost:3000`.

---

### 2. Rodar o Frontend2

Abra outro terminal:

```sh
cd frontend
npm install
npm run dev
```
O frontend estará disponível em `http://localhost:5173`.

---


## Funcionalidades

- Listar heróis cadastrados
- Adicionar novo herói
- Editar herói existente
- Remover herói

---

## Estrutura do Projeto

```
crud-herois-da-marvel-fullstack/
│
├── backend/
│   └── src/
│       └── ... (NestJS, models, controllers)
│
├── frontend/
│   └── src/
│       └── ... (React, páginas, componentes)
│
└── README.md
```
