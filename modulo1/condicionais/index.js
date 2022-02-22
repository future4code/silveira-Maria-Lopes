    // exercícios de interpretação de código


    // primeiro exercício:


    //a) o código verá se o resto da divisão do número que receber será 0.
    // se for, será impresso true, senão, será impresso false.

    //b) para números pares, que o resto da divisão será sempre 0.

    //c) para números ímpares, que o resto da divisão será sempre 1.


    // segundo exercício:

    //a) para simplificar o código que será executado dentro dele,
    // seguindo quase a mesma linha de raciocínio que if/if+else/else.

    //b) o preço da fruta maçã é R$ 2.25.

    //c) ao invés de imprimir o valor correto da fruta pêra,
    // seria impresso o valor abaixo de default, que é o valor seguinte 
    // ao valor da pêra, que é 5.


    // terceiro exercício:

    //a) pedindo ao usuário que inserisse um número.

    //b) seria impresso "esse número passou no teste" para 10,
    // mas daria erro ao pedir para imprimir -10.
    // deveria ter sido colocado um default para aparecer uma mensagem
    // de "não passou no teste".

    //c) daria erro, pois a variável mensagem foi declarada dentro do escopo,
    // e não pode ser invocada fora dele.




    // exercícios de escrita de código

    // primeiro exercício:


        
        const guardaIdade = +prompt("Qual a sua idade?") 
   
        function podeDirigir(guardaIdade) {
            if(guardaIdade >= 18 ){
                console.log("Pode dirigir!")
            }else(guardaIdade < 18)
                {console.log("Não pode dirigir!")
            }
        }
        
        podeDirigir(guardaIdade);


    // function podeDirigir (idade) {
    //     if (idade >= 18){
    //     console.log("Pode dirigir! Uhul!")}
    //     else{
    //         (idade < 18)
    //             console.log("Não pode dirigir!")
    //         }
    //     }
    //     const idade = +prompt("Qual a sua idade?") >= 18
    //     console.log(idade)

    // fiquei em dúvida nessa porque só imprimia true,
    // e eu achando que tinha que imprimir alguma outra frase,
    // mas aí digitei um número menor de idade e imprimiu false,
    // aí pensei: opa, talvez esteja certa! 
    // no caso fiz de duas maneiras diferentes. uma imprimindo "pode dirigir"
    // ou "não pode dirigir", e outra imprimindo true or false.

    
    // segundo exercício:

      const turno = prompt("Em qual turno você estuda? Digite M para matutino, V para vespertirno e N para noturno.");
      
           
       if(turno == "M"){
          console.log("Bom dia!")
     }else if(turno == "V")
        {console.log("Boa tarde!")
     }else if(turno == "N")
        {console.log("Boa noite!")
       }
      
       

      // terceiro exercício:


     const turno1 = prompt("Em qual turno você estuda? Digite M para manhã, V para vespertino e N para noturno.");

     switch (turno1) {
         case 'M':
         console.log("Bom dia!")
         break
        case 'V':
         console.log("Boa tarde!")
         break
        case 'N':
         console.log("Boa noite!")
     } 



    // quarto exercício:


    const genero = prompt("Qual o gênero do filme que vocês vão assistir?");
    const precoIngresso = +prompt("Qual o preço do ingresso?");

    if(genero == "fantasia" && precoIngresso < "15"){
        console.log("Bom filme!")
    }else if(genero !== "fantasia" && precoIngresso > "15")
        console.log("Escolham um filme diferente :("); 


