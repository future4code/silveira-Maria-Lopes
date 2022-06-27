Respostas:

Exercício 1, letra a)
Concordo que seja melhor o uso de strings para representar os ids pela possibilidade de combinações.

Exercício 2, letra a)
Começando pelo connection, que é o modo como conectamos o código ao nosso banco de dados. 
Abaixo, a função para inserir um novo usuário no nosso banco de dados.

letra b)
CREATE TABLE UsersTable (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

Exercício 3, letra a)
A linha as string garante que a informação de resposta virá como string.