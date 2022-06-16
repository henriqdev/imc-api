

const formulaIMC = (peso, altura) => {
  return parseFloat((peso / (altura * altura))).toFixed(1)
}

module.exports = {
  formulaIMC
}
