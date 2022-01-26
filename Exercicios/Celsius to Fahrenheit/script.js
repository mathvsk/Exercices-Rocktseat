function celsiusToFahrenheit (number) {
  let conversao = (number * 1.8) + 32
  return conversao
}

function fahrenheiToCelsius (number) {
  let conversao = (number - 32) * 5/9
  return conversao
}

console.log(celsiusToFahrenheit(20).toFixed(0))
console.log(fahrenheiToCelsius(20).toFixed(0))