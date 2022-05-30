//EXERCÍCIO 3:

const tarefa = [process.argv[2]]
const listaDeTarefas = ['dormir', 'comer', 'beber', 'jogar'];
const addTarefas = listaDeTarefas.push(tarefa)
console.log(listaDeTarefas);
//Aqui rodei o comando npm run start "comprar leite", como no exemplo do Notion, e o resultado foi:
// ['dormir', 'comer', 'beber', 'jogar', 'comprar leite'];
