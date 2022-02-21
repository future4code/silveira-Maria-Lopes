console.log("Hello World!")

// exercícios de interpretação de código:

// primeiro exercício:

//console.log(filme.elenco[0]) = será impresso Matheus Nachtergaele.
//console.log(filme.elenco[filme.elenco.length - 1]) = será impresso Virgínia Cavendish.
//console.log(filme.transmissoesHoje[2])= será impresso canal globo, pois pediu número 2, e arrays se iniciam em 0.


// segundo exercício:

// letra a:

// Juca, porque criou-se a variável gato, copiou as informações da variável cachorro,
// e adicionou um nome, Juba. Por fim, criou-se a variável tartarura, que fez uma cópia
// da variável gato, e adicionou o nome da variável de gato (Juba)
// com a letra 'a' sendo substituída pela letra 'o', que ficou Jubo.

// letra b:

// Separa chave de valor.


// terceiro exercício:

// letra a:

// será impresso no consolo false e undefined.

// letra b:

// false para a primeira opção pois "backender" foi definido o valor false,
// e undefined para a segunda opção pois pediu para imprimir altura,
// e não há nenhum valor atribuído para altura, portanto, undefined.



// exercícios de escrita de código:

// primeiro exercícios:

// letra a:

const nomeApelido = {
   nome: "Maria Eduarda", 
   apelidos: ["Duda", "Dudinha", "Eduarda"]
}

function nomeApelido1 (nomeApelido) {
    //const nomeApelidoUsuario = (`Eu sou ${nome}, mas pode me chamar de ${apelidos[0]}, ${apelidos[1]} ou ${apelidos[2]}`);

   }

    console.log(`Eu sou ${nomeApelido.nome}, mas pode me chamar de ${nomeApelido.apelidos[0]}, ${nomeApelido.apelidos[1]} ou ${nomeApelido.apelidos[2]}.`);


// letra b:


const novoObjeto = {...nomeApelido,  apelidos: ["Maria", "Madu", "Du"]
}

console.log(novoObjeto);


// segundo exercício: 

const primeiroObjeto = {
    nome: "Maria",
    idade: 22,
    profissao: "Estudante"
}

const segundoObjeto = {
    nome: "Eduarda",
    idade: 22,
    profissao: "Também estudante (same person)"
}

function resultado(primeiroObjeto) {
    return [primeiroObjeto.nome, primeiroObjeto.nome.length, primeiroObjeto.idade, primeiroObjeto.profissao, primeiroObjeto.profissao.length]
}

function resultado2(segundoObjeto) {
    return [segundoObjeto.nome, segundoObjeto.nome.length, segundoObjeto.idade, segundoObjeto.profissao, segundoObjeto.profissao.length]
}


// terceiro exercício:

const carrinho = [];


const frutas1 = {
   nome: "Banana",
   disponibilidade: true

}

const frutas2 = {
    nome: "Morango",
    disponibilidade: true
}

const frutas3 = {
    nome: "Abacaxi",
    disponibilidade: true
}

function frutas(frutas1, frutas2, frutas3) {
    
}

    carrinho.push(frutas1);
    carrinho.push(frutas2);
    carrinho.push(frutas3);
    console.log(carrinho);


    //desafios

    function informacoes() {
        const nomeUsuario = prompt("Qual o seu nome?");
        const usuarioIdade = +prompt("Qual a sua idade?");
        const usuarioProfissao = prompt("Qual a sua profissão?");

    }



