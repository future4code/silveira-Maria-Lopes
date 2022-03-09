// exercícios de interpretação de código:

// primeiro exercício:

// será impresso no console o item, indice e array de todos os
// elementos que estão na variável const usuarios.

// segundo exercício:

// serão impressos todos os "nomes" que estão na variável
// const usuários. Ou seja:
// nome: "Amanda Rangel"
// nome: "Laís Petra"
// nome: "Letícia Chijo"

// terceiro exercício:

// o 'filter' vai filtrar, ou seja, tudo que for diferente de "Chijo",
// o novo array não irá imprimir. Sendo assim, será impresso somente 
// a linha 0 e 1 do array, sem a linha nome e apelido da Letícia Chijo.


// exercícios de escrita de código:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// letra a)

const guardarNomeDoguinhos = pets.map((item, indice, array) => {
const nomeDoguinhos = item.nome
console.log(nomeDoguinhos)
 })

// letra b)

const guardarRacaSalsicha = pets.filter((item, indice, array) => {
if(item.raca === "Salsicha"){
    return true
   }else{
    return false
   }
});
   
console.log(guardarRacaSalsicha)

// letra c)

const mensagemParaPoodles = pets.filter((item, indice, array) => {
const poodles = item.raca === "Poodle"
return poodles


});

console.log(mensagemParaPoodles)


const mensagemPoodles = mensagemParaPoodles.map((item, indice, array) => {
if(item.raca === "Poodle"){
return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome} !`
}
})

console.log(mensagemPoodles)


// segundo exercício:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// letra a)

 const nomeProdutos = produtos.map((item, indice, array) => {
 const guardaNome = item.nome
 console.log(guardaNome)

 })


// letra b)

const nomePreco = produtos.map((item, indice, array) => {
    guardaNomes = {
        nome: item.nome,
        preco: item.preco * 0.95
    }
    console.log(guardaNomes);
});



// letra c)

const apenasBebidas = produtos.filter((item, indice, array) => {
const somenteBebidas = item.categoria === "Bebidas"
return somenteBebidas
})

console.log(apenasBebidas)


// letra d)

const apenasYpe = produtos.filter((item, indice, array) => {
const selecionandoYpes = item.nome.includes("Ypê")
return selecionandoYpes

})

console.log(apenasYpe);


// letra e)

const frase = produtos.map((item, indice, array) => {
if(item.nome.includes("Ypê")){
    console.log(`Compre ${item.nome} por ${item.preco} ! `)
}

})



// Desafio

// letra a)

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const emOrdemAlfabetica = pokemons.map((item, indice, array) => {
return item.nome

})

console.log(emOrdemAlfabetica.sort());


// letra b)

const tiposPokemons = pokemons.filter((item, indice, array) => {
    const somenteTipos = item.tipo
    console.log(somenteTipos);

})

const tipos = pokemons.map(pokemon => pokemon.tipo); 
const unicos = [...new Set(tipos)];
console.log(unicos)



///obs: queria deixar registrado aqui que estou orgulhosa 
// de mim mesma porque é o primeiro exercício completo que 
// consigo fazer sem muita dificuldade, e é o primeiro
// desafio que faço, e ainda por cima sozinha! Hoje foi nota 10 <3



  
  function VerificaPrimo(num) {
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          return "É primo"
      };
    return "Não é primo"
  }
  console.log(VerificaPrimo(100));
  //qualquer número que eu colocar entre parênteses no console.log
  //vai imprimir a frase "é primo", caso seja, ou "não é primo", 
  //caso não seja.



  // somente alguns exemplos com while, for e for...of...

  let numero = 5

  while (numero < 10) {
      console.log(numero)
      numero++
  }


  let numero1 = 10

  while(numero1<22) {
      console.log(numero1)
      numero1++
  }


  for (let i=1; i<=10; i++)  {
	console.log(i);
}

  let letras = ['a', 'b', 'c'];
  for (let letras1 of letras) {
	console.log(letras1);
}
// for in diz o número de cada índice (nesse caso, 0, 1 e 2);
// for of vai imprimir o que tem em casa item (nesse caso, a, b e c);
