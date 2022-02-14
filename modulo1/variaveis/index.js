//Exercícios de interpretação de código

// resposta da primeira: 10, 10, 5. 

// resposta da segunda: 10, 10, 10.

// resposta da terceira:
// let horasTrabalhadasDiariamente = ("Quantas horas você trabalha por dia?");
// let valorRecebidoDiariamente = ("Quanto você recebe por dia?");
// alert (`Você recebe $ {valorRecebidoDiariamente/horasTrabalhadasDiariamente} por hora´)



//Exercícios de escrita de código



//número 1:

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

//São do tipo undefined pois nenhum valor foi atribuído às variávels nome e idade.

nome = prompt ("Qual é o seu nome?");
idade = prompt ("Qual é a sua idade?");

//Variáveis nome e idade são do tipo string e number.

console.log ("Olá", nome, "Você tem", idade, "anos");


//número 2:

let SobreEstadoCivil = prompt ("Qual o seu estado civil?");
let SobreComidasFavoritas = prompt ("Qual a sua comida favorita?");
let SobreAmor = prompt ("Você acredita no amor?");

console.log ("Qual o seu estado civil?", SobreEstadoCivil);
console.log ("Qual a sua comida favorita?", SobreComidasFavoritas);
console.log ("Você acredita no amor?", SobreAmor);

//número 3:

let a = 10
let b = 25

novaVariavel = a;
a = b;
b = novaVariavel;

//vamos criar uma outra variavel pra adicionar o valor de b à ela.


console.log ("O novo valor de 'a' é", a);
console.log ("O novo valor de 'b' é", b);














