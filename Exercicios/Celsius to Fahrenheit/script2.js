




// transformando para grau
function transformaGrau (grau) {
  const celsiusExist = grau.toUpperCase().includes("C")
  const fahrenheitExist = grau.toUpperCase().includes("F")


  // fluxo de erro
  if (!celsiusExist && !fahrenheitExist) {
    throw new Error("Grau não identificado")
  }

  // fluxo ideal, F to C
  let atualizaGrau = Number(grau.toUpperCase().replace("F", ""))
  let formula = fahrenheit => (fahrenheit - 32) * 5/9
  let incrementeSinal = "C"

  // fluxo alternativo, C to F
  if (celsiusExist) {
    atualizaGrau = Number(grau.toUpperCase().replace("C", ""))
    formula = celsius => celsius * 9/5 + 32
    incrementeSinal = "F"
  }

  return formula(atualizaGrau) + incrementeSinal
}

try {
  console.log(transformaGrau("50f"))
  console.log(transformaGrau("10c"))
  console.log(transformaGrau("45j"))
} catch (error) {
  console.log(error.message)
}