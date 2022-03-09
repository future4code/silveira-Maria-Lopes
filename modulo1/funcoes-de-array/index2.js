const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // letra a)
 
 const nomeDoguinhos = pets.map((item, indice, array) => {
    return item.nome
  })
    console.log(nomeDoguinhos)
 
// letra b)

const somenteSalsichas = pets.filter((item, indice, array) => {
return item.raca === "Salsicha"
});
console.log(somenteSalsichas);

// letra c)

const mensagemParaPoodles = pets.filter((item, indice, array) => {
    return item.raca === "Poodle"
}).map((item, indice, array) => {
    const mensagem = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome} !`
    return mensagem

});
console.log(mensagemParaPoodles)


// número 2:

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

const nomeItem = produtos.map((item, indice, array) => {
    return item.nome
})
console.log(nomeItem)

// letra b)

// const nomePreco = produtos.map((item, indice, array) => {
//     guardaNomes = {
//         nome: item.nome,
//         preco: item.preco * 0.95
//     }
//     console.log(Math.round(guardaNomes.preco));
// });

//o Math.round() arredonda o número para um número inteiro!

const nomePreco = produtos.map((item, indice, array) => {
    return {nome: item.nome, preco: (item.preco*0.95).toFixed(2)}
});
console.log(nomePreco);

//o toFixed(2) arredonda o número e entre os () significa quantas
//casas depois do número eu quero que ele arredonde.


// letra c)

const somenteBebidas = produtos.filter((item, indice, array) => {
    return item.categoria === "Bebidas"
});
console.log(somenteBebidas)

// letra d)

const palavraYpe = produtos.filter((item, indice, array) => {
    return item.nome.includes("Ypê");
})
console.log(palavraYpe)

// letra e)

const frase = palavraYpe.map((item, indice, array) => {
    if(item.nome.includes("Ypê")){
        return (`Compre ${item.nome} por ${item.preco} ! `)
    }
    })
    console.log(frase);

// DESAFIO

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


// exercícios pra treinar LOOPING