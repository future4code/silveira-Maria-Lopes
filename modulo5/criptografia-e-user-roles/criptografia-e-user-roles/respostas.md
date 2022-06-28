Exercício 1
letra a) Com "rounds" significam o fator custo. O fator de custo controla quanto tempo é necessário para calcular um único hash BCrypt. Quanto maior o fator de custo, mais rodadas de hashing são feitas. Aumentar o fator de custo em 1 dobra o tempo necessário. Quanto mais tempo é necessário, mais difícil é a força bruta.
O salt é um valor aleatório, e deve diferir para cada cálculo, de modo que o resultado dificilmente deve ser o mesmo, mesmo para senhas iguais. É geralmente incluído na sequência de hash resultante em forma legível. Assim, com o armazenamento do hash-string você também armazena o sal. Veja esta resposta para mais detalhes.

Exercício 2
letra a) Preciso modificar primeiramente o endpoint de cadastro, porque preciso já cadastrar minha senha criptografada.

letra d) 