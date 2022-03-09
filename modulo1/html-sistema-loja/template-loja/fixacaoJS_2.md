```function calculaPrecoTotal(quantidade) {
  let preco1 = 1.30
  let preco2 = 1.00
  
  if (quantidade >= 12) {
    return preco2 * quantidade
  } else if (quantidade < 12) {
    return preco1 * quantidade
  }
  
  }