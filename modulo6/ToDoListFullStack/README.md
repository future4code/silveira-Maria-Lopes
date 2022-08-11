# Teppa - LISTA DE TAREFAS

### Projeto desenvolvido em agosto de 2022, por Maria Eduarda Lopes. 
<br>
Aplicação completa(Backend e Frontend);
<br>
<br>
- BACKEND completo utilizando:
<br>
<br>
- Typescript;
<br>
- Node JS;
<br>
- Banco de dados MySQL.
<br>
<br>
- FRONTEND completo utilizando:
<br>
<br>
- React;
<br>
- Typescript;
<br>
- Bootsrap.

## Sobre o projeto:
<br>
Desenvolvido no intuito de ser uma lista de tarefas, com funcionalidades básicas de um CRUD(Create, Read, Update e Delete).
<br>
<br>

Link da documentação: https://documenter.getpostman.com/view/20352466/UzkV2wmZ
<br>
Link do surge: todolist-maria-eduarda-lopes.surge.sh
<br>

## CADASTRO
O usuário precisa preencher os campos: email e password para realizar o cadastro. É necessário o preenchimento de todos os campos para a finalização da função. Aqui, o id é gerado automático e a senha é criptografada.
<br>
## LOGIN
O usuário precisa preencher os campos email e password para realizar o login. O email precisa ter o formato correto, contendo um @, e o password informado no momento do login precisa ser o mesmo que foi informado ao realizar o cadastro, caso contrário, não conseguirá realizar o login.
<br>
## CADASTRO DE TAREFA
O usuário precisa estar logado (passando o token recebido no momento do login por headers authorization), e preenchendo os campos title e status da tarefa por body na requisição.
<br>
## BUSCAR TODAS AS TAREFAS
O usuário pode realizar uma busca por todas as tarefas existentes.
<br>
## ATUALIZAR UMA TAREFA ESPECÍFICA POR ID
O usuário precisa estar logado (passando o token recebido no momento do login por headers authorization), e preenchendo os campos title e status da tarefa por body na requisição para atualizar a tarefa.
<br>
## DELETAR UMA TAREFA ESPECÍFICA POR ID
O usuário precisa estar logado (passando o token recebido no momento do login por headers authorization), e passar o id da tarefa que deseja deletar por path params.
<br>
<br>

## Linguagens e libs utilizadas:
- Typescript
- Mysql
- Dotenv
- Express
- Knex
- Bcryptjs
- Uuid
- Jsonwebtoken
- Bootstrap
<br>
<br>

### Como rodar a aplicação:
- Clone o projeto no terminal utilizando o git clone;
- Na pasta do projeto, instale as dependências com o comando npm install;
- Crie um arquivo .env com as configurações do seu banco de dados(preferencialmente MySQL, que foi o banco de dados utilizado no projeto);
- No arquivo .env, deverá ficar dessa forma:

```
DB_HOST = seu_endereço_host
DB_USER = seu_usuário
DB_PASSWORD = sua_senha
DB_SCHEMA = seu_banco_de_dados
JWT_KEY = chave_jwt
```
- Por fim, execute a aplicação rodando o comando npm start, ou npm run start para deixar o projeto rodando o tempo todo.
OBSERVAÇÃO: você pode testar os endpoints em um arquivo request.rest ou através de um cliente HTTP (ex: postman), utilizando o endereço http://localhost:3003 como URL padrão para as requisições. Para obter informações de cada endpoint, consulte a documentação.
<br>
<br>

## EXTRA

Tabelas criadas no MySQL Workbench para o desenvolvimento do projeto:

- Tabela de usuário:

CREATE TABLE teppa_users(
<br>
	  id VARCHAR(255) PRIMARY KEY,
  <br>
    email VARCHAR(255) NOT NULL,
    <br>
    password VARCHAR(255) NOT NULL
);
<br>
<br>

- Tabela de tarefas:

CREATE TABLE teppa_todolist(
   <br>
  	id VARCHAR(255) PRIMARY KEY,
    <br>
    title text NOT NULL,
      <br>
    status VARCHAR(255) NOT NULL
);
<br>

