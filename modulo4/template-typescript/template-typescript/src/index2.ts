//EXERCÍCIO 2:

function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string  ): void {
    console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas('branco', 'roxo', 'amarelo')



//EXERCÍCIO 3:

function checaAnoBissexto(ano: number): boolean {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }
 console.log(`Ano não bissexto:`, checaAnoBissexto(2003), `Ano Bissexto:`, checaAnoBissexto(2004))


//EXERCÍCIO 4:

function comparaDoisNumeros(num1: number, num2:number) {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }

  console.log(comparaDoisNumeros(10,5))


//Exercício 5:

function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number):boolean { 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoRG(2005, 1999, 2002))

//DESAFIOS!
//Exercício 6:

function twoNumbers(n1: number, n2: number): any  {
    let maior: number;

    n1 > n2 ? maior = n1 : maior = n2;

   console.log(`Soma:`, (n1 + n2))
   console.log(`Subtração:`, (n1 - n2))
   console.log(`Multiplicação:`, (n1 * n2))
   console.log(`O maior número:`, maior)
}

console.log(twoNumbers(20, 10))

//Exercício 7:

function transcreveRNA(string:string):void {
    var rna = string.split("")

    for (let i:number = 0; i < rna.length; i++) {
        if (rna[i] === "A") {
            rna[i] = "U"
        } else if (rna[i] === "T") {
            rna[i] = "A"
        } else if (rna[i] === "C") {
            rna[i] = "G"
        } else if (rna[i] === "G") {
            rna[i] = "C"
        }
    }
    console.log(rna.join(''))
}
transcreveRNA("ATTGCTGCGCATTAACGACGCGTA")
//O método join() junta todos os elementos de um array em uma string e retorna
//essa string.

function transcreveRNA2(string:string): void {
    let rna = ""
   
    for (let i = 0; i < string.length; i++) {
        switch(string[i]) {
            case "A":
                rna+="U"
                break;
            case "T":
                rna+="A"
                break;
            case "C":
                rna+="G"
                break;
            case "G":
                rna+="C"
                break;
        }
    }
    console.log(rna)
}
transcreveRNA2("ATTGCTGCGCATTAACGACGCGTA")
//Fiz de duas formas diferentes para testar.
//No início deu erro pois eu estava percorrendo o switch(string) e não o switch(string[i]) na posição i,
//que eu defini na linha acima, no for.

//Exercício 8:

function reverseString(teste: string): any {
let invertida = teste.split("").reverse().join("");
console.log('invertida', invertida)
}
reverseString('Exercício concluído!')

