// questão 1.

// function minhaFuncao(variavel) {
//          return variavel * 5
// }

// (minhaFuncao(2));
// (minhaFuncao(10));

// a) vai retornar a multiplicação que for feita dentro dos parâmetros.
// O resultado será, respectivamente, 10 e 50.

// b) daria erro, pois minhaFuncoes(variavel) não é uma função.
// sendo assim, iria somente guardar o resultado dentro da variavel minhaFuncao,
// mas não imprimiria nada no console.


// questão 2. 

// let textoDoUsuario = prompt("insira um texto aqui");
// const outraFuncao = function(texto) {
//     return texto.toLowerCase().includes("cenoura")
// }

// const resultado = outraFuncao(textoDoUsuario);
// console.log(resultado);

// a) funcions são blocos de construção do javascript.
//    um conjunto de instruções que executa uma tarefa ou
//    calcula um valor. Para usar uma função, é necessário
//    defini-la em algum lugar no escopo do qual você quiser chamá-la.

// b) como o método includes() tem saída booleana, 
//    será impresso no console true nas 3 entradas, 
//    pois as 3 contem a palavra 'cenoura'. 



// exercícios de escrita de código

// primeiro exercício:
// letra a)

function informacoes() {
   const frase = ("Meu nome é Eduarda, tenho 22 anos, moro em Minas Gerais e sou estudante.")
   console.log(frase);
}

const frase = ("Meu nome é Eduarda, tenho 22 anos, moro em Minas Gerais e sou estudante.");
console.log(frase);



// letra b)

function informacoesPessoais(nome, idade, cidade, profissao) {
const nome1 = ("Maria Eduarda")
const idade1 = ("22 anos");
const cidade1 = ("Minas Gerais")
const profissao1 = ("Estudante");
return nome.idade.cidade.profissao 


}

const nome1 = ("Maria Eduarda");
const idade1 = ("22 anos");
const cidade1 = ("Minas Gerais");
const profissao1 = ("Estudante");

const fraseCompleta = (`Eu sou ${nome1}, tenho ${idade1}, moro em ${cidade1}, e sou ${profissao1} .`);
console.log(fraseCompleta);



// fiz dessa maneira, e depois descobri essa maneira de fazer, bem menor:



function informacoesPessoais1(nome2, idade2, cidade2, profissao2) {
const frase = `Eu sou ${nome2}, tenho ${idade2}, moro em ${cidade2} e sou ${profissao2} . `
return frase;

}

console.log(informacoesPessoais1('Maria Eduarda', '22', 'MG', 'estudante'));


// segundo exercício:

// letra a)

function somar(a, b) {

    const soma = 20 + 40
    return soma;

}
console.log(somar(20+40));


// letra b)

function numeroBooleano(c, d) {
    const numeroDois = 10 >= 20
    return numeroDois;

}

console.log(numeroBooleano(10 >= 20));

// letra c)

function numeroBooleanoDois(c) {
    const numeroPar = 8 / 2

}
const numeroPar = (8 / 2) % 2 === 0
console.log(numeroPar);

// letra d)

function mensagem(texto) {

console.log(` ${texto} , ${texto . toUpperCase()} ` );


}

mensagem("Café é minha bebida favorita!");


// terceiro exercício:

function soma1(a, b) { 
    return a + b;

};

function subtracao(a, b){
    return a - b;

};

function multiplicar(a, b){
    return a * b;

};

function dividir(a,b){
    return a / b;

};

const valores = [ ];
valores [ 10 ] = +prompt ("Digite um número!");
valores [ 5 ] = +prompt ("Digite outro número!");

console.log( `Números inseridos: ${ valores [ 10 ] } e ${ valores [ 5 ] } 
   ${valores [ 10 ] } + ${valores [ 5 ] } = ${soma1 ( valores [ 10 ] , valores [ 5 ] ) }
   ${valores [ 10 ] } - ${valores [ 5 ] } = ${subtracao (valores [ 10 ] , valores [ 5 ] ) }
   ${valores [ 10 ] } * ${valores [ 5 ] } = ${multiplicar (valores [ 10 ] , valores [ 5 ] ) }
   ${valores [ 10 ] } / ${valores [ 5 ] } = ${dividir (valores [ 10 ] , valores [ 5 ] ) } `);
