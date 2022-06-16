const {
  ChatBotStatics
} = require('../../models')
const db = require('../../models')
// const { formulaIMC } = require('./factory/CalculateMain')
const { ValidationError } = require('sequelize')
const Op = db.Sequelize.Op

const seekAnswer = async (req, res) => {
  try {
    const result = await db.sequelize.transaction(async (t) => {
      const { stepflow, question } = req.body
      const data = await ChatBotStatics.findOne({
        where: {
          stepFlow: {
            [Op.eq]: stepflow
          },
          keywords: {
            [Op.like]: `%${question}%`
          }
        },
        transaction: t
      })
      if (data.length <= 0) {
        throw new ValidationError('Erro', [
          {
            message: 'Desculpe, estou aprendendo e não entendi oque vc quis dizer!'
          }
        ])
      }
      return data
    })
    return res
      .status(200)
      .send({
        status: 200,
        response: result,
        message: 'Busca efetuada'
      })
  } catch (error) {
    console.error(error)
    const msgerro = []
    for (const e in error.errors) {
      msgerro.push({
        others: null,
        message: error.errors[e].message
      })
    }
    return res
      .status(400)
      .send({
        messageMain: 'Encontramos alguns erros',
        errors: msgerro
      })
  }
}

module.exports = {
  seekAnswer
}
