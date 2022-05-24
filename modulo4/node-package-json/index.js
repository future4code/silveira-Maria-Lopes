// Respostas dos exercícios de hoje.

//EXERCÍCIO 1:

// a) Etapa 1: Salve um arquivo como index.js e com o código var arguments = process.argv ; console.log(arguments) ;
// Etapa 2: execute o arquivo index.js usando o comando abaixo: node index.js.

// b)
const myName = process.argv[2]
const myAge = Number(process.argv[3]);

console.log((myName && myAge ? `Olá, ${myName}! Você tem ${myAge} anos` : "Faltou preencher!"))


// c)
// const ageInSevenYears = Number(myAge + 7)
// console.log(`Olá, ${myName}! Você tem ${myAge} anos. Em sete anos você terá ${ageInSevenYears}.`)

// Retorna o texto em vermelho
console.log("\033[31m Aqui esta o texto em vermelho.")

// Retorna o texto em roxo
console.log("\033[34m Aqui esta o texto em roxo.")

// Criando variavel para deixar um pouco mais simples
var red, blue, reset;
red   = '\u001b[31m';
blue  = '\u001b[34m';
reset = '\u001b[0m';

console.log(red +"Aqui esta o texto em vermelho. "+ purple +"Aqui esta o texto em roxo. "+ reset +"Aqui estamos dando reset nas cores do bash.")



