console.log("Hello World!");

// exercícios de interpretação de código:


// primeiro exercício:

// o código rodará um loop até o valor da variável let, que se inicia em 0,
// e vai até o 4. Em seguida, o valor da variável "valor" é i (que descobrimos o número anteriormente),
// e somando os números da variável i (0,1,2,3 e 4), temos o número 10.
// atingir o valor < 5. Sendo assim, será impresso no console o número 10.


// segundo exercício:

// letra a) será impresso no console todos os números que forem maiores que 18.

// letra b) para acessar o índice do array seria necessário colocar o número 
// do item que você quer acessar dentro de colchetes. Por exemplo,
// [0] para acessar o primeiro item, [1] para acessar o segundo, e assim sucessivamente.


// terceiro exercício:

// daria loop no sinal de "*" 4 vezes, somando a quantidade de asteriscos.
// por exemplo, o usuário digitou 4, e começamos o asteriscos com somente um. Sendo assim,
// *, em seguida **, em seguida *** e por último ****.




// exercícios de escrita de código:
   

//    let numeroPetsUsuario = +prompt("Quantos pets você tem?");
//    let nomeDosPets = [];

//        if (numeroPetsUsuario == 0) {
//        console.log("Que pena! Você pode adotar um pet!");
//        }else{
//        for (let i = 0; 1 < numeroPetsUsuario; i++) {
//        nomeDosPets [i] = prompt(`Qual o nome do seu ${i + 1} pet?`);

//         }
//       }
   
//         for(let i = 0; numeroPetsUsuario; i++){
//         console.log(nomeDosPets[i])
//         }



    // segundo exercício:


        const primeiroArray = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
     
        for(let k = 0; k < primeiroArray.length; k++){
         console.log(primeiroArray[k]);
         };

        for(let k of primeiroArray){
        console.log(k/10);
        };


        let segundoArray = [];
        for(let k of primeiroArray){
         if((k % 2) == 0) {
             segundoArray.push(k)
         }
         };

         console.log(segundoArray);


        //letra d)

        let outraFrase = [];
        for(let k = 0; k < primeiroArray.length; k++){
            outraFrase[k] = `O elemento do index ${k} é igual a ${primeiroArray[k]}`;
        };

        for(let frase of outraFrase) {
            console.log(frase)
        };

         //letra e)
 
        //[80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

        let maiorNumero = primeiroArray[0];
        let menorNumero = primeiroArray[0];

        for(let i of primeiroArray) {
            if(i < menorNumero)
                menorNumero = i;
            }
            
            if(i > maiorNumero) {
                maiorNumero = i;
            };

            console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`);
