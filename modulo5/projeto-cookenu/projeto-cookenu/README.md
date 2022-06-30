![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>


# Projeto: Cookenu

### Projeto desenvolvido em junho de 2022, por Maria Eduarda Lopes.

### Documentação da API:
https://documenter.getpostman.com/view/20352466/UzBvHPL2
<br>

## Sobre o projeto: 
Desenvolvido e inspirado em uma rede social, na qual os usuários podem dividir informações sobre receitas. Possui todas as funcionalidades mais comuns que vemos diariamente, tais como:

### CADASTRO
O usuário precisa preencher os campos: nome, email, password e role(ADMIN OU NORMAL) para realizar o cadastro. É necessário o preenchimento de todos os campos para a finalização da função. Aqui, o id é gerado automático e a senha é criptografada.

### LOGIN
O usuário precisa preencher os campos email e password para realizar o login. O email precisa ter o formato correto, contendo um @, e o password informado no momento do login precisa ser o mesmo que foi informado ao realizar o cadastro, caso contrário, não conseguirá realizar o login.
<br>
### BUSCAR PRÓPRIO PERFIL
O usuário tem a opção de fazer uma busca pelo próprio perfil. Para isso, é necessário passar por headers Authorization o token que recebeu no momento em que realizou o login.
<br>
### BUSCAR OUTROS USUÁRIOS
O usuário tem a opção de fazer uma busca por outro usuário. Para isso, é necessário estar logado e informar o ID do usuário que está buscando por path params. 
<br>
### CADASTRAR RECEITA
O usuário tem a opção de cadastrar uma receita, que contem os seguintes atributos: título e descrição. Para cadastrar uma receita, o usuário precisa estar logado em sua conta e preencher todos os campos requisitados. 
<br>
### BUSCAR RECEITA
O usuário tem a opção de fazer uma busca por uma receita. Para isso, precisa estar logado e passar o ID da receita que está buscando por path params.
<br>
### SEGUIR USUÁRIO
O usuário tem a opção de seguir outro usuário. Para isso, é preciso informar por headers authorization o token(que contem o id do usuário que está logado), e em seguida informar o id do usuário que deseja seguir. Atente-se que essa funcionalidade se assemelha ao do instagram: um usuário seguir outro, não significa que "esse outro" está seguindo o primeiro.
<br>
### DEIXAR DE SEGUIR UM USUÁRIO
O usuário tem a opção de deixar de seguir outro usuário. Para isso, é preciso informar por headers authorization o token(que contem o id do usuário que está logado), e em seguida informar o id do usuário que deseja parar de seguir. 
<br>
### PEGAR FEED DE RECEITAS
O usuário tem a opção de acessar o feed de receitas dos usuários que está seguindo. Para isso, ele também precisa estar logado. 
<br>
### EDITAR RECEITA
O usuário tem a opção de editar uma receita criada anteriormente. Para isso, é necessário estar logado e passar o ID da receita que deseja editar por path params, e preencher por body os campos title e description com as novas informações. Observação: o usuário só pode editar receitas criadas por ele mesmo.
<br>
### DELETAR RECEITA
O usuário tem a opção de deletar uma receita. Para isso, é necessário passar o ID da receita que deseja deletar por path params. Observação: o usuário só pode deletar receitas criadas por ele mesmo.
### DELETAR CONTA
O usuário tem a opção de deletar uma conta. Para isso, é necessário passar por headers authorization o token do usuário que está logado e o ID da conta que será deletada por path params. 


## Tecnologias utilizadas:
- Node.js
- Typescript
- MYSQL
- Programação Orientada à Objetos
- Postman
- Git
<br>
<br>

## Linguagens e libs utilizadas:
- Typescript
- mysql
- dotenv
- express
- knex
- bcryptjs
- uuid
- jsonwebtoken
- moment
<br>
<br>

### Conhecimentos adquiridos durante o desenvolvimento do projeto:
- Integração com banco de dados externo.
- Requisições API Rest.
- Sistema de Autenticação e Autorização.
- Criptografia e geração de tokens contendo informações sensíveis.
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
OBSERVAÇÃO: você pode testar os endpoints em um arquivo request.rest ou através de um cliente HTTP (ex: postman), utilizando o endereço localhost:3003 como URL padrão para as requisições. Para obter informações de cada endpoint, consulte a documentação.
<br>

## EXTRA

Tabelas criadas no MySQL Workbench para o desenvolvimento do projeto:

- Tabela de usuário

```
CREATE TABLE User (
  id varchar(255) PRIMARY KEY,
  email varchar(255) UNIQUE NOT NULL,
  password varchar(255) NOT NULL,
  role varchar(255) NOT NULL DEFAULT 'normal',
  name varchar(255) NOT NULL,
)
```

- Tabela de receitas
```
CREATE TABLE Recipes (
  id varchar(255) PRIMARY KEY,
  title varchar(255) UNIQUE NOT NULL,
  description text NOT NULL,
  created_at bigint(20) NOT NULL,
  creator_user_id varchar(255) NOT NULL,
  FOREIGN KEY (creator_user_id) REFERENCES User (id)
)
```

- Tabela relação entre usuários
```
CREATE TABLE UserFollowConnection (
  followed_id varchar(255) NOT NULL,
  follower_id varchar(255) NOT NULL,
  FOREIGN KEY (followed_id) REFERENCES User (id),
  FOREIGN KEY (follower_id) REFERENCES User (id)
)
```