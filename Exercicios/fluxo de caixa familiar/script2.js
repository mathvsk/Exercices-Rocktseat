// versão melhorada 

fluxoDeCaixa = {
  receitas : [12, 58, 69, 150, 200, 500, 4],
  despesas: [45, 98, 84, 74, 16, 400, 600]
}

function sum(array) {
  total = 0
  
  for (let i of array)
  total += i

  return total
}

function saldoFamilia () {
  const receitas = sum(fluxoDeCaixa.receitas)
  const despesas = sum(fluxoDeCaixa.despesas)

  const total = receitas - despesas

  const positivo = total > 0

  let mensagem = "negativo"
  
  if (positivo) {
    mensagem = "positvo"
  }

  console.log(`Seu saldo é ${mensagem}. Valor em conta: ${total} `)
}

saldoFamilia()