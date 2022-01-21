function conversaoNotas (nota) {
  let note

  if(nota >= 90 && nota <= 100) {
    note = "A"
  }
  else if(nota >= 80 && nota < 90){
    note = "B"
  }
  else if(nota >= 70 && nota < 80){
    note = "C"
  }
  else if(nota >= 60 && nota < 70){
    note = "D"
  }
  else if(nota < 60 && nota >= 0) {
    note = "F"
  }
  else{
    note = "Nota inválida"
  }
  return note
}

console.log(conversaoNotas(45))