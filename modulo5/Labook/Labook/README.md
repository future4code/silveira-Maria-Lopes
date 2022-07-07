![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>


# Projeto: Labook

### Projeto desenvolvido em julho de 2022, por Maria Eduarda Lopes.

### Documentação da API:
https://documenter.getpostman.com/view/20352466/UzJLNwN8
<br>

## Sobre o projeto: 
Desenvolvido e inspirado em uma rede social, possuindo todas as funcionalidades mais comuns que vemos diariamente, tais como:

### CADASTRO
O usuário precisa preencher os campos: nome, email e password para realizar o cadastro. É necessário o preenchimento de todos os campos para a finalização da função. Aqui, o id é gerado automático e a senha é criptografada.

### LOGIN
O usuário precisa preencher os campos email e password para realizar o login. O email precisa ter o formato correto, contendo um @, e o password informado no momento do login precisa ser o mesmo que foi informado ao realizar o cadastro, caso contrário, não conseguirá logar.
<br>
### CRIAR POST
O usuário tem a opção de criar um post, preenchendo os campos: photo, description, type e created_at. Para criar um post, o usuário precisa estar logado e preencher todos os campos necessários.
<br>
### BUSCAR UM POST POR ID
O usuário tem a opção de fazer uma busca por um post. Para isso, é necessário estar logado e informar o ID do post que está buscando por path params.
<br>
### FAZER AMIZADE
O usuário tem a opção de fazer amizade com outro usuário. Para isso, é necessário estar logado e passar o ID do usuário que deseja tornar-se amigo por body.
<br>
### DESFAZER AMIZADE
O usuário tem a opção de desfazer amizade com outro usuário. Para isso, é necessário estar logado e passar o ID do usuário que deseja desfazer amizade por body.
<br>
### VER TODO O FEED
O usuário tem a opção de acessar o feed de posts dos usuários que está seguindo. Para isso, ele também precisa estar logado. 
<br>
### VER APENAS UM TIPO DE POST DO FEED
O usuário tem a opção de filtrar o tipo de post que deseja ver em seu feed, com as opções: normal e event. Para isso, o usuário precisa estar logado e passar por query params o tipo de post que deseja buscar.
<br>
### CURTIR POST
O usuário tem a opção de curtir um post. Para isso, o usuário precisa estar logado e passar o ID do post que deseja curtir por body.
<br>
### DESCURTIR POST
O usuário tem a opção de descurtir um post. Para isso, o usuário precisa estar logado e passar o ID do post que deseja descurtir por body.
<br>
### COMENTAR POST
O usuário tem a opção de comentar um post, sendo possível comentar o mesmo post mais de uma vez. Para isso, o usuário precisa estar logado, passar o comentário e o ID do post que deseja comentar por body na requisição.
<br>
### PAGINAR FEED

<br>

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
OBSERVAÇÃO: você pode testar os endpoints em um arquivo request.rest ou através de um cliente HTTP (ex: postman), utilizando o endereço https://labook-eduarda-lopes.herokuapp.com como URL padrão para as requisições. Para obter informações de cada endpoint, consulte a documentação.
<br>