//EXERCÍCIO 4: 
//a + b)
type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

//c) Dentro do package.json criaria o caminho para iniciar ("start2": "tsc && node ./build/index2.js");
//d) Como criei o comando acima no package.json, só utilizei npm run start2 e o arquivo index.js foi criado.
//mas o comando "tsc arquivo1.ts" transpila o arquivo.


//DESAFIOS!
//EXERCÍCIOS 5:

type Consultas = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}

const consultando: Consultas[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

function ordenandoConsultas(consultando: Consultas[]): any {
    const consultaOrdenada = consultando.sort((a, b) => a.nome > b.nome ? 1 : -1)
    return consultaOrdenada
}

console.log(ordenandoConsultas(consultando))


//EXERCÍCIO 6:

// 4000 AC - Idade Antiga. 
// Em 476DC - Idade Média
// 1453 DC - Idade Moderna
// 1789 DC - Idade Contemporânea

enum Siglas {
    AC = "AC",
    DC = "DC"
}

function historica(ano: number, sigla: Siglas): any {

    switch (sigla) {
        case "AC":
            if (ano > 4000) {
                return "Pré-história"
            } else {
                return "Idade Antiga"
            }
        case "DC":
            if (ano < 476) {
                return "Idade Antiga"
            } else if (ano >= 476 && ano < 1453) {
                return "Idade Média"
            } else if (ano >= 1453 && ano < 1789) {
                return "Idade Moderna"
            } else if (ano >= 1789) {
                return "Idade Contemporânea"
            } else {
                return "Erro! Insira um valor válido"
            }
    }
}
console.log(historica(4000, Siglas.AC))
console.log(historica(476, Siglas.DC))
console.log(historica(1473, Siglas.DC))
console.log(historica(1789, Siglas.DC))


//EXERCÍCIO 7:

// Para isto, ela classifica as roupas em: de verão, de inverno, para banho e íntimas. 
// Cada uma tem a sua própria porcentagem de desconto: 
// 5% (verão), 10% (inverno), 4% (banho) e 7% (íntimas).

enum Classe {
    VERAO = "verão",
    INVERNO = "inverno",
    BANHO = "banho",
    INTIMAS = "intimas"
}

type Produto = {
    nome: string,
    preco: number,
    classificacao: Classe
}

const arrayProdutos:Produto[] = [
    { nome: "Calça", preco: 30, classificacao: Classe.VERAO },
    { nome: "Casaco", preco: 40, classificacao: Classe.INVERNO },
    { nome: "Toalha", preco: 50, classificacao: Classe.BANHO },
    { nome: "Lingerie", preco: 60, classificacao: Classe.INTIMAS }
]

function produtos(arrayProdutos: Produto[]) {
    let descontoProduto = arrayProdutos.map((produto) => {
        if (produto.classificacao === Classe.VERAO) {
            return {
                ...produto, precoComDesconto: produto.preco - (produto.preco * 5 / 100)
            }
        }else if (produto.classificacao === Classe.INVERNO) {
            return {
                ...produto, precoComDesconto: produto.preco - (produto.preco * 10 / 100)
            }
        }else if (produto.classificacao === Classe.BANHO) {
            return {
                ...produto, precoComDesconto: produto.preco - (produto.preco * 4 / 100)
            }
        }else if (produto.classificacao === Classe.INTIMAS) {
            return {
                ...produto, precoComDesconto: produto.preco - (produto.preco * 7 / 100)
            }
        } return produto
    })
    return descontoProduto
}


console.log(arrayProdutos)
console.log(produtos(arrayProdutos))


//EXERCÍCIO 8:
//a)
const pratosRestaurante: any = [
    { nome: "Strogonoff", custo: 30, valorDeVenda: 60, arrayDeIngredientes: ["Frango"]},
    { nome: "Espaguete", custo: 40, valorDeVenda: 80, arrayDeIngredientes: ["Macarrão"] },
    { nome: "Nhoque de mandioquinha", custo: 50, valorDeVenda: 100, arrayDeIngredientes: ["Mandioquinha"]},
    { nome: "Lula grelhada com arroz negro", custo: 60, valorDeVenda: 120, arrayDeIngredientes: ["Lula", "Arroz negro"] }
]

function addProducts() {
    let pratos = pratosRestaurante.map(() => {
        // if (prato.classificacao === Classe.VERAO) {
        //     return {
        //         ...produto, precoComDesconto: produto.preco - (produto.preco * 5 / 100)
        //     }
    })
}
console.log(addProducts())

//b)
