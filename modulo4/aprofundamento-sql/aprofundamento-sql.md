ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

describe Actor;

SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- 1)
-- a) Esse comando removeria a coluna salary da tabela de atores.
-- b) Esse comando altera o nome da coluna gênero para sex com um VARCHAR(6).
-- c) Esse comando altera a coluna gênero mas gênero com um VARCHAR(255).
-- d) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- 2)
-- a) 
UPDATE Actor
SET name = "Maria Eduarda", birth_date = "1999-06-20"
WHERE id = "003";

-- b)
SELECT UPPER(name) from Actor
WHERE name = "Juliana Paes";

SELECT LOWER(name) from Actor
WHERE name = "Juliana Paes";

-- c)
UPDATE Actor
SET 
name = "Maria Eduarda",
birth_date = "1999-06-20",
salary = 600000,
gender = "female"
WHERE id = "005";

-- d)
UPDATE Actor
SET 
	name1 = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
-- Tentei atualizar o campo name1, que não existe, e me retornou um erro dizendo exatamente isso.

-- 3)
-- a)
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";

-- b)
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

-- 4)
-- a)
SELECT MAX(salary) AS maior_salario FROM Actor;

-- b)
SELECT MIN(salary) FROM Actor
WHERE gender = "female";

-- c)
SELECT COUNT(*) FROM Actor 
WHERE gender = "female";

-- d)
SELECT SUM(salary) FROM Actor;

-- 5)
-- a)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- O resultado foram 2 colunas, um com a quantidade de atores, e outra com a quantidade de atrizes.

-- b)
SELECT id, name FROM Actor
ORDER BY name DESC;
-- Assim retorna o nome em ordem decrescente.

SELECT id, name FROM Actor
ORDER BY name DESC;
-- Assim retorna o id em ordem decrescente.

--  c) 
SELECT * FROM Actor
ORDER by salary;

-- d)
SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;

-- e)
SELECT AVG(salary), gender FROM Actor 
GROUP BY gender;

-- 6)
-- a)
ALTER TABLE filmes 
ADD playing_limit_date DATE;

describe filmes;

-- b)
ALTER TABLE filmes
CHANGE avaliacao avaliacao FLOAT;

-- c)
UPDATE filmes
SET data_lancamento = "2022-06-07"
WHERE titulo = "Minha Mãe é Uma Peça";

-- d)
DELETE FROM filmes
WHERE id = 01;

-- DESAFIOS!
-- 7)
-- a)
SELECT * FROM filmes
WHERE avaliacao > 7.5;

-- b)
SELECT AVG(avaliacao) FROM filmes;

-- c)
SELECT COUNT(*) FROM filmes WHERE playing_limit_date > CURDATE();

-- d)
SELECT COUNT(*) FROM filmes
WHERE data_lancamento > CURDATE();

-- e)
SELECT MAX(avaliacao) FROM filmes;

-- f)
SELECT MIN(avaliacao) FROM filmes;

-- 7)
-- a)
SELECT * FROM filmes
ORDER BY titulo ASC;

-- b)
SELECT * FROM filmes
ORDER BY titulo DESC LIMIT 3;

-- c)
SELECT * FROM filmes
WHERE data_lancamento < curdate();

-- d)
SELECT * FROM filmes
ORDER BY avaliacao DESC LIMIT 3;

-- 8)
-- a)
SELECT * FROM filmes 
ORDER BY titulo;

-- b)
SELECT * FROM filmes
ORDER BY titulo DESC LIMIT 3;

-- c)
SELECT * FROM filmes
ORDER BY data_lancamento DESC LIMIT 3; 

-- d)
SELECT * FROM filmes
ORDER BY avaliacao DESC LIMIT 3;