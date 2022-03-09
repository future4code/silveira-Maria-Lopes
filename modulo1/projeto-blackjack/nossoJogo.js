/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log('Bem vindo(a) ao jogo de Blackjack!')    
    
    const primeiraCartaUsuario = comprarCarta()
    const segundaCartaUsuario = comprarCarta()
    const primeiraCartaComputador = comprarCarta()
    const segundaCartaComputador = comprarCarta();

    if(confirm("Quer iniciar uma nova rodada?")) {

       let somandoCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;
       let somandoCartasComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor;

    console.log(`Usuário - cartas ${primeiraCartaUsuario.texto},${segundaCartaUsuario.texto} - pontuação ${somandoCartasUsuario}`);
    console.log(`Computador - cartas ${primeiraCartaComputador.texto}, ${segundaCartaComputador.texto} - pontuação ${somandoCartasComputador}`);
   
    if(somandoCartasUsuario > somandoCartasComputador) {
      console.log("O usuário ganhou!");
   }else if(somandoCartasComputador > somandoCartasUsuario){
      console.log("O computador venceu!");
   }else if(somandoCartasUsuario === somandoCartasComputador){
      console.log("Empate!");
   }
} else {
   console.log("O jogo acabou!");
}