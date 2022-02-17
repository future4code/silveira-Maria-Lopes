console.log("Olá!");


// exercícios de interpretação de código


// let array
// console.log('a', array);
// dará undefined, pois não foi atribuído nenhum valor para a variável array.
// ('a', indefinido.)

// array = null
// console.log('b.', array);
// aqui será impresso ('b. nulo'), porque o valor atribuído à variável
// array foi nulo.


// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log ('c.', array.length);
// será impresso no console ('c.11'), pois length faz a soma 
// dos números que aparecem na tela, que são 11.

// let i = 0
// console.log('d', array [i]);
// aqui novamente aparecerá um erro, pois a variável "array" não foi declarada

//  array [i+1] = 19
//  console.log('e.', array)
// acredito que será impresso ('e. 19');

// const valor = array[i + 6];
// console.log('f.', valor);
// acredito que será impresso ('f. 7')


// const frase = prompt('digite uma frase');
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
// vai imprimir "Subi num ônibus em Marrocos", em seguida "Subi num ônibus em Mirrocos",
// e, por último, 27, pois faz a soma incluindo os espaços. 



// exercícios de escrita de código

// primeiro exercício 

   const nome = prompt("Qual o seu nome?");
   const email = prompt("Qual o seu e-mail?");
   const nomeEmail = `O e-mail ${email} foi cadastrado com sucesso. Seja bem vinda, ${nome} !`;
   console.log(nomeEmail);


// segundo exercício

const comidasFavoritas = ["pipoca", "feijão", "queijo", "batata palha", "comida japonesa"];
console.log(comidasFavoritas);
console.log (`Minhas comidas favoritas são:
- ${ comidasFavoritas [0] }
- ${ comidasFavoritas [1] }
- ${ comidasFavoritas [2] }
- ${ comidasFavoritas [3] }
- ${ comidasFavoritas [4] } `);

  comidasFavoritas [1] = prompt("Qual a sua comida favorita?");
  console.log(comidasFavoritas);


  // terceiro exercício

  let listaDeTarefas = [ ];
  listaDeTarefas [ 0 ] = prompt ('Qual a sua primeira tarefa diária?');
  listaDeTarefas [ 1 ] = prompt ('Qual a sua segunda tarefa diária?');
  listaDeTarefas [ 2 ] = prompt ('Qual a sua terceira tarefa diária?');

  console.log(`Minhas tarefas diárias:
  1 ${ listaDeTarefas [ 0 ] }
  2 ${ listaDeTarefas [ 1 ] }
  3 ${ listaDeTarefas [ 2 ] } `);

  let listaDeTarefasUsuario = +prompt(`Qual tarefa você já realizou?
  1 ${ listaDeTarefas [ 0 ] } 
  2 ${ listaDeTarefas [ 1 ] }
  3 ${ listaDeTarefas [ 2 ] } `);

  tarefaUsuario.splice(-1 , 1); 

  console.log (`Tarefas não concluídas: 
  - ${ listaDeTarefas [ 0 ] }
  - ${ listaDeTarefas [ 1 ] }`);






