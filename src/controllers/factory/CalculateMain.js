

const formulaIMC = (peso, altura) => {
  return parseFloat(peso / (altura * 2)).toFixed(2)
}

module.exports = {
  formulaIMC
}
