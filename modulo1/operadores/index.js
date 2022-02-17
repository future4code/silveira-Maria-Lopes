// exercícios de interpretação de código


// primeiro exercício:

//    const bool1 = true
//    const bool2 = false
//    const bool3 = !bool2 

// o const bool3 é true, porque é o oposto do bool2, que é false.


// let resultado = bool1 && bool2
// console.log("a.", false)

// resultado = bool1 && bool2 && bool3
// console.log("b.", false)
// é false porque tem um false no meio.


// resultado = !resultado && (bool1  ||  bool2)
// console.log("c.", true)

// console.log ("d.", typeof boolean)



// segundo exercício:

// o problema é que prompt só imprime strings, e "digite um número" não é string, e sim number.
// apareceu no console os dois números juntos que eu digitei,
// digitei 5 e 6, e ao invés de somar (11), apareceu simplesmente 56.
// a soma não foi realizada.


// terceiro exercício: 

// para a soma correta no exercício anterior seja realizada,
// deve-se usar um sinal de + antes do comando prompt,
// porque como disse anteriormente, o comando prompt só imprime strings,
// e como "digite um número" irá imprimir um número na tela,
// se faz necessário um sinal de + ou Number antes do comando prompt.



// exercícios de escrita de código

// primeiro exercício:

//const idade = +prompt("Qual a sua idade?");
//const idadeMelhorAmigo = +prompt("Qual a idade do seu melhor amigo?");
//const diferencaDeIdade = idade - idadeMelhorAmigo
//console.log("Sua idade é maior do que a do seu melhor amigo?", idade >= idadeMelhorAmigo);
//console.log("A diferença de idade é:", diferencaDeIdade);


// segundo exercício:

//const numeroPar = +prompt("Insira aqui um número par!");
//const restoDaDivisao = (numeroPar % 2) / 2;
//console.log(restoDaDivisao);

//const outroNumeroPar = +prompt("Insira aqui outro número par!");
//const outroRestoDaDivisao = (outroNumeroPar % 2) / 2;
//console.log(outroRestoDaDivisao);

// o padrão que temos quando testamos com diversos números pares é
// que o resto da divisão é sempre igual a 0.

//const maisUmNumeroPar = +prompt("Insira aqui, novamente, outro número par!");
//const maisUmRestoDaDivisao = (maisUmNumeroPar % 2) / 2;
//console.log(maisUmRestoDaDivisao);
// agora sim temos um resto da divisão, pois coloquei o número 1,
// e imprimiu no console 0.5.


// terceiro exercício:

//const idadeDoUsuario = +prompt("Quantos anos você tem?");
//const idadeEmMeses = idadeDoUsuario * 12;
//console.log(idadeEmMeses);

//const idadeEmDias = idadeDoUsuario * 365;
//console.log(idadeEmDias);

//const idadeEmHoras = idadeEmDias * 24;
//console.log(idadeEmHoras);


// quarto exercício:

//const primeiroNumeroInserido = +prompt("Insira aqui um número!");
//const segundoNumeroInserido = +prompt("Insira aqui outro número!");

//console.log("O primeiro número é maior que o segundo?", primeiroNumeroInserido >= segundoNumeroInserido);
//console.log("O primeiro número é igual ao segundo?", primeiroNumeroInserido <= segundoNumeroInserido);
//console.log("O primeiro número é divisível pelo segundo?", (primeiroNumeroInserido / segundoNumeroInserido) !== 0);
//console.log("O segundo número é divisível pelo primeiro?", (segundoNumeroInserido / primeiroNumeroInserido) === 0);







//só pra testar com juan

//const fraseDoUsuario = prompt("Insira aqui uma frase");
//const fraseLetrasMaiusculas = fraseDoUsuario.toUpperCase();
//console.log(fraseLetrasMaiusculas);

//const fraseSubstituicaoLetra = fraseDoUsuario.replaceAll("o", "i");
//console.log(fraseSubstituicaoLetra);

//const tamanhoDaFrase = fraseDoUsuario.length;
//console.log(tamanhoDaFrase);

//arrays

const listaDeDoguinhos = ["viralata", "buldogue", "pastor alemão", "poodle", "chihuahua"];
//index                       0           1              2             3           4
const numeroDoCachorro = +prompt("Insira um número de 1 a 5 para escolher o cachorro");
console.log(`Eu amo ${listaDeDoguinhos[numeroDoCachorro-1]}`);



