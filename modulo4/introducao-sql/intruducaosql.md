CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- a)
-- Primary Key no id para identificação;
-- VARCHAR para declarar strings;
-- DATE representa uma data (no formato internacional)
-- Por fim, o NOT NULL significa que o campo não pode ficar vazio.

-- b)
-- O comando SHOW DATABASES mostra meu banco de dados, e o SHOW TABLES mostra minha tabela Actor.

-- c)
-- DESCRIBE Actor me mostrou a tabela inteira.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
002,
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
002,
"Murilo",
1500000,
"1991-08-23",
"male"
);

-- Error Code 1062, Duplicate entry '2' for key PRIMARY. 
-- Esse erro indica que tentei usar uma key PRIMARY que já está sendo utilizada.

-- c)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- O erro acima dá-se porque foi adicionado no 'body' do insert informações
-- que não foram passadas dentro dos parâmetros do início. 
-- Para resolver, adicionei birth_date e gender nos parênteses. 

-- d)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Luiz",
  400000,
  "1949-04-18", 
  "male"
);

-- Aqui o erro dá-se porque diz que o campo name não tem um campo vazio, 
-- porque foi passado para ele o valor NOT NULL. O campo deve ser preenchido.
-- Para resolver, inseri um nome nesse campo. 

-- e)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- Incorrect date value. A data precisa ser inserida entre strings.

-- e)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);


-- 3)
-- a)
SELECT * FROM Actor
WHERE gender = "female";

-- b)
SELECT salary FROM Actor
WHERE name = "Tony Ramos";

-- c)
 SELECT * FROM Actor
 WHERE gender = "invalid";
 -- retornou todos os campos NULL. 
 
 -- d)
SELECT id, name, salary FROM Actor
WHERE salary > 500000;

-- e)
SELECT id, nome from Actor WHERE id = "002";
-- Foi pedido para retornar nome, mas o nome correto do campo é name. o ID está entre aspas, mas não deveria, pois é um number.
SELECT id, name FROM Actor WHERE id = 002;

-- 4)
-- a)

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
-- Retornando nomes que começam com A ou com J e tenham salários maiores que 300.000. 
-- Nesse caso, não importa o final do nome, mas sim o início. Deve começar com A ou J.alter

-- b)
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

-- c)
SELECT * FROM Actor
WHERE name LIKE "%G" OR name LIKE "G%" OR name LIKE "%G%";

-- d)
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  
-- 5)
-- a)
CREATE TABLE filmes(
id VARCHAR (255) PRIMARY KEY,
titulo VARCHAR (255) NOT NULL,
sinopse TEXT NOT NULL,
data_lancamento DATE NOT NULL,
avaliacao INT NOT NULL
);

-- b)
INSERT INTO filmes(id, titulo, sinopse, data_lancamento, avaliacao)
VALUES (
001,
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-06-01",
7
);

INSERT INTO filmes(id, titulo, sinopse, data_lancamento, avaliacao)
VALUES (
002,
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO filmes(id, titulo, sinopse, data_lancamento, avaliacao)
VALUES (
003,
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

INSERT INTO filmes(id, titulo, sinopse, data_lancamento, avaliacao)
VALUES (
004,
"Minha Mãe é Uma Peça",
"Dona Hermínia (Paulo Gustavo) é uma mulher de meia idade, divorciada do marido (Herson Capri), que a trocou por uma mais jovem (Ingrid Guimarães). Hiperativa, ela não larga o pé de seus filhos Marcelina (Mariana Xavier) e Juliano (Rodrigo Pandolfo), sem se dar conta que eles já estão bem grandinhos. Um dia, após descobrir que eles consideram ela uma chata, resolve sair de casa sem avisar para ninguém, deixando todos, de alguma forma, preocupados com o que teria acontecido. Mal sabem eles que a mãe foi visitar a querida tia Zélia (Sueli Franco) para desabafar com ela suas tristezas do presente e recordar os bons tempos do passado.",
"2013-06-21",
10
);

-- 6)
-- a)
SELECT titulo, avaliacao FROM filmes
WHERE id = 001;

-- b)
SELECT * FROM filmes
WHERE titulo = "Se Eu Fosse Você";

-- c)
SELECT id, titulo, sinopse FROM filmes
WHERE avaliacao >= 7;

-- 7)
-- a)
SELECT * FROM filmes
WHERE (titulo LIKE "%vida%" OR titulo LIKE "%vida" OR titulo LIKE "vida%");

-- b)
SELECT * FROM filmes
WHERE titulo LIKE "M%";

-- c)
SELECT * FROM filmes
WHERE data_lancamento < "2022-06-06";

-- d)
SELECT * FROM filmes
WHERE titulo LIKE "M%" AND avaliacao > 7;