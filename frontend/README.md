# Desafio: Criação de um CRUD de Novos Heróis da Marvel

Neste desafio, você deverá desenvolver uma aplicação full-stack utilizando React para o frontend e Node.js com NestJS para o backend. O objetivo é implementar um sistema de gerenciamento de novos heróis da Marvel com operações CRUD (Create, Read, Update, Delete).

> OBS : Você receberá um e-mail com a data de início dos desafios, mas eles já estão disponíveis para acesso imediato. 
Se ainda não preencheu o formulário, por favor, acesse o link para completá-lo.
[Forms de inscrição](https://forms.gle/EJKDNKdmVZM3zQTr7)
é importante está inscrito no formulário , pois o seu email precisa ser validado

## Requisitos do Projeto

### Frontend (React + TypeScript)

**Página Principal:**
- Exibe a lista de heróis.
- Permite a criação de um novo herói.
- Permite a atualização de heróis existentes.
- Permite a exclusão de heróis.

**Componentes Necessários:**
- `HeroList`: Componente que exibe a lista de heróis.
- `HeroItem`: Componente que representa um herói individual com opções de editar e excluir.
- `HeroForm`: Componente para criar e editar heróis.

### Backend (Node + NestJS + TypeScript + Banco de Dados Relacional ou Não Relacional)

**Rotas para CRUD de Heróis:**

- **Criar Herói**
  - **Endpoint:** `/heroes`
  - **Método:** POST
  - **Descrição:** Cria um novo herói. Os dados do herói (nome, habilidades, e origem) devem ser enviados no corpo da requisição. O cadastro deve ser predefinido a heróis que já existem no universo Marvel.

- **Listar Heróis**
  - **Endpoint:** `/heroes`
  - **Método:** GET
  - **Descrição:** Retorna a lista de todos os heróis.

- **Atualizar Herói**
  - **Endpoint:** `/heroes/:id`
  - **Método:** PUT
  - **Descrição:** Atualiza um herói existente com base no ID. Os novos dados do herói (nome, habilidades, e origem) devem ser enviados no corpo da requisição.

- **Excluir Herói**
  - **Endpoint:** `/heroes/:id`
  - **Método:** DELETE
  - **Descrição:** Exclui um herói existente com base no ID.

## Requisitos Técnicos

**Frontend:**
- Utilizar React com TypeScript.
- Utilizar Axios ou Fetch para fazer requisições HTTP ao backend.
- Gerenciar o estado da aplicação utilizando o contexto do React ou uma biblioteca de gerenciamento de estado como Redux ou Zustand.
- Uso do SWR será considerado uma habilidade valorizada.
- É opcional utilizar a API de personagens da Marvel.

**Backend:**
- Utilizar NestJS com TypeScript.
- Utilizar um banco de dados relacional ou não relacional (ex. MongoDB, PostgreSQL, MySQL).
- Implementar as operações CRUD (Create, Read, Update, Delete) para gerenciar os heróis.

## Critérios de Avaliação

- Funcionamento correto das operações CRUD no frontend e backend.
- Qualidade e clareza do código.
- Organização do projeto e estrutura de pastas.
- Documentação das rotas e como utilizá-las.
- Interface do usuário e experiência do usuário (UI/UX).

## Entrega

Faça o deploy da sua aplicação em plataformas como GitHub Pages, Heroku, Vercel, Netlify, ou qualquer outra de sua preferência. Após concluir o desafio, envie o link do deploy e do repositório do código-fonte por e-mail para projetofrontendfusion@gmail.com. O e-mail deve incluir:

- Nome
- Link do GitHub
- Link do LinkedIn
- Data de Início
- Data de Entrega
- Link do GitHub com o Código
- Link do Deploy

**Observação:** É obrigatório entregar o desafio em até 20 dias após o início.

## Prazo

Você tem 20 dias para concluir todos os três desafios.

## Como Participar

1. Faça um fork deste repositório.
2. Desenvolva sua solução no seu repositório forkado.
3. Após completar o desafio, envie o link do deploy e do repositório através do e-mail para projetofrontendfusion@gmail.com com o assunto: "Entrega + Desafios[01] + Seu Nome".

**Exemplo de E-mail**

Assunto: Entrega + Desafios[01] + João Silva
Olá,

Segue abaixo a entrega do Desafio 01 para o processo seletivo do Frontend Fusion.

Nome: João Silva Link do GitHub: https://github.com/joaosilva 
Link do LinkedIn: https://linkedin.com/in/joaosilva 
Data de Início: 01/09/2024 Data de Entrega: 20/09/2024 
Link do GitHub com o Código: https://github.com/joaosilva/desafio01 
Link do Deploy: https://joaosilva.netlify.app

Agradeço a oportunidade e estou à disposição para qualquer dúvida.

Atenciosamente, João Silva


Boa sorte e estamos ansiosos para ver seu trabalho! 🚀

Este desafio faz parte do processo seletivo do projeto Frontend Fusion para a vaga de Desenvolvedor React Júnior.


