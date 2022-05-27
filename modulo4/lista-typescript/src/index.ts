// import { createAbstractBuilder, Type } from "typescript"

import { getSourceMapRange } from "typescript";

// console.log('início do projeto')

// //1)
function nomeData() {
    const nome = "Eduarda"
    const data = "20/06/99"
    const dia = data.substring(0, 2)
    const mes = data.substring(3, 5)
    const ano = data.substring(6, 9)
    console.log(`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)
}
nomeData()

// //2)
function parametro(number: number): any {
    let numero: number = 1;
    console.log(typeof numero);
}
parametro(1)

//3)
enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}
//a saída será um type parecido com esse aqui:
type Saida = {
    nome: string,
    anoLancamento: number,
    genero: string,
    nota?: number
}

const filmes: Saida[] = [
    { nome: "", anoLancamento: 2000, genero: "", nota: 10 },
    { nome: "Duna", anoLancamento: 2020, genero: GENERO.ACAO, nota: 8.0 },
    { nome: "Diário de uma paixão", anoLancamento: 2004, genero: GENERO.ROMANCE, nota: 10 }
]

function netflix(filmes: Saida[]) {
    return filmes[2]
}
console.log(netflix(filmes))
//se eu coloco pra retornar somente filmes, retorna todos. 
//por isso, coloquei o índice pra retornar -SOMENTE- meu filme favorito <3


//tentando fazer de outra forma
function amazon(nome: string, anoLancamento: number, ENUM: GENERO, nota?: number) {
    let resultado = nome + anoLancamento + ENUM + (nota ? "sim" : "não")
    return resultado
}
console.log(amazon("Duna", 2000, GENERO.ACAO, 10))

// //4)
enum SETORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type PessoasColaboradoras = {
    nome: string,
    salário: number,
    setor: SETORES
    presencial: boolean,
}

const pessoas: PessoasColaboradoras[] = [
    { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
]

function confirmar(pessoas: PessoasColaboradoras[]) {
    let filtrando = pessoas.filter((pessoa) => {
        if (pessoa.setor === "marketing" && pessoa.presencial === true) {
            return pessoa
        }
    })
    console.log([filtrando])
}
console.log(confirmar(pessoas))

// //5)
type Usuarios = {
    name: string,
    email: string,
    role: string
}

const arrayUsuarios: Usuarios[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

function verificando(arrayUsuarios: Usuarios[]) {
    let verifica = arrayUsuarios.map((usuario) => {
        if (usuario.role === "admin") {
            return usuario.email
        }
    }).filter((usuarios) => {
        return usuarios
    })
    console.log([verifica])
}
console.log(verificando(arrayUsuarios))

// 6)
type UsuariosBanco = {
    cliente: string,
    saldoTotal: number,
    debitos: Array<number>
}

const clientes: UsuariosBanco[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function banco(clientes: UsuariosBanco[]): UsuariosBanco[] {

    const negativos = clientes.filter((cliente) => {
        let total = 0;
        for (let i = 0; i < cliente.debitos.length; i++) {
                total += cliente.debitos[i]
        }
        cliente.saldoTotal = cliente.saldoTotal - total;

        if(cliente.saldoTotal < 0) {
            return cliente
        }
    })
       return negativos;
}

console.log(banco(clientes));



//7)
type Estoque = {
    nome: string,
    quantidade: number,
    valorUnitario: any
}
const estoque: Estoque[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]

function novoPreco(estoque: Estoque[]): Estoque[] {
    const ajustaPreco = (preco: number): string => {
        const valorAjustado: string = preco.toFixed(2).replace('.', ',')
        return "R$ " + valorAjustado
    }

    const precoBrasil = estoque.map((preco) => {
        preco.valorUnitario = ajustaPreco(preco.valorUnitario)
        return preco
    })

    return precoBrasil
}

console.log(novoPreco(estoque))

//8)
function calcularRenovacao(nascimento: string, carteira: string): boolean {
    let dataNascimento = new Date(nascimento.split("/").reverse().join('-'));
    let dataCarteira = new Date(carteira.split("/").reverse().join('-'));
    let today = new Date()

    return
}

//9)
function anagram(a: string, b: string): boolean {
    // Not of same length, can't be Anagram
    if (a.length !== b.length) {
        return false;
    }

    // Inbuilt functions to rearrange the string
    var str1 = a.split('').sort().join('');
    var str2 = b.split('').sort().join('');

    var result = (str1 === str2);
    return result;
}
console.log(anagram('abc', 'cba'));

//10) 
function recebeCpf(cpf: string): any {
    cpf = "xxx.xxx.xxx-xx" 

    if (cpf[3] != "." || cpf[7] != "." || cpf[11] != "-") {
        return "false"
    }else
    return "true"
}
console.log(recebeCpf("xxx.xxx.xxx-xx"))

//11) 

