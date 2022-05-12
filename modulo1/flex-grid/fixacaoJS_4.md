```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let contador = 0
  for (let i=0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i]==numeroEscolhido){
        contador++
    }
  }
  if(contador>0){
    return (`O número ${numeroEscolhido} aparece ${contador}x`)
  }else{
    return "Número não encontrado"
  }
}