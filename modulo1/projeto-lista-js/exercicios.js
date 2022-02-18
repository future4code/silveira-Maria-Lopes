// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const resultado = +prompt("Qual a altura de um retângulo?");
  const resultado1 = +prompt("Qual a largura de um retângulo?");
  const resultadoFinal = (resultado * resultado1) 
  console.log(resultadoFinal);

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
//

const anoAtual = +prompt("Qual o ano atual?");
const idade = +prompt("Qual a sua idade?")
const idadeAnoAtual = anoAtual - idade
console.log(idadeAnoAtual);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const pesoAltura = peso / (altura * altura);
  return pesoAltura;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

const nome5 = prompt("Qual o seu nome?");
const idade5 = +prompt("Qual a sua idade?");
const emailUsuario5 = prompt("Qual o seu e-mail?");
console.log(`Meu nome é ${nome5}, tenho ${idade5} anos, e o meu email é ${emailUsuario5}.`);





}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const corFav1 = prompt("Insira cor favorita número 1:");
const corFav2 = prompt("Insira cor favorita número 2:");
const corFav3 = prompt("Insira cor favorita número 2:");
const arrayCorFav = [corFav1, corFav2, corFav3];
console.log(arrayCorFav);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const texto1 = "oi"
return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const somando = custo / valorIngresso
return somando;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const checando = string1.length === string2.length
return checando; 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 
   const primeiroNumero = array.shift()
   const ultimoNumero = array.pop()
   array.unshift(ultimoNumero)
   array.push(primeiroNumero)
   return array 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return (string1.toLowerCase() === string2.toLowerCase());

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const pergunta1 = +prompt("Qual o ano atual?");
  const pergunta2 = +prompt("Qual o seu ano de nascimento?");
  const pergunta3 = +prompt("Em que sua carteira de identidade foi omitida?");
  const idade1 = pergunta1 - pergunta2
  const diferenca = pergunta1 - pergunta3

  const primeiroTermo = ( idade1 <= 20 && diferenca >= 5)
  const segundoTermo = ( ( idade1 > 20 && idade <= 50) diferenca >= 10)
  const terceiroTermo = ( idade1 > 50 && diferenca >= 15 )
  console.log(primeiroTermo || segundoTermo || terceiroTermo);
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}