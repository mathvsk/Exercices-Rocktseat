fluxoDeCaixa = {
  receitas : [12, 58, 69, 150, 200, 500, 4],
  despesas: [45, 98, 84, 74, 16, 400, 600]
}



function calcularSaldo () {
  let totalReceita = 0
  let totalDespesa = 0
  let saldo = 0

  for (let i in fluxoDeCaixa.receitas)
  totalReceita += fluxoDeCaixa.receitas[i]

  for (let i in fluxoDeCaixa.despesas)
  totalDespesa += fluxoDeCaixa.despesas[i]

  saldo = totalReceita - totalDespesa

  if (saldo > 0) {
    console.log("Saldo Positivo")
  }
  else {
    console.log("Saldo Negativo")
  }
  
  return saldo
}

console.log(calcularSaldo())