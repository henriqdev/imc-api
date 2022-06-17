const {
  ChatBotStatics
} = require('../../models')
const db = require('../../models')
const { formulaIMC } = require('../factory/CalculateMain')
const { createUser } = require('../ImcUser')

const { ValidationError } = require('sequelize')
const Op = db.Sequelize.Op

const seekAnswer = async (req, res) => {
  try {
    const result = await db.sequelize.transaction(async (t) => {
      let questionAcept = true;
      const { stepflow, question } = req.body
      console.log(stepflow, question)
      // if para ignorar a question que virá do usuario
      // e busca a proxima pergutna com base no stepFlow
      if (stepflow == '3' || stepflow == '4' || stepflow == '5' || stepflow == 'F' ) {
        questionAcept = false
      }
      const data = await ChatBotStatics.findOne({
        where: {
          stepFlow: {
            [Op.eq]: stepflow
          },
          keywords: questionAcept ? {
            [Op.like]: `%${question}%`
          } : ''
        },
        transaction: t
      })
      if (!data) {
        throw new ValidationError('Erro', [
          {
            message: 'Desculpe, estou aprendendo e não entendi você!'
          }
        ])
      }
      const { user, answerMODIFY } = await switchData(req, data, t)
      data.user = user
      data.answerMain = answerMODIFY
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

async function switchData (req, answerBOT, t) {
  const { stepflow } = req.body
  let user, answerMODIFY;
  switch (stepflow) {
    case 'F': // peso e finaliza
      user = await createUser(req.body.user, t)
      answerMODIFY = answerBOT.answerMain.replace(/#/i, formulaIMC(user.weight, user.height))
      break
      default:
        answerMODIFY = answerBOT.answerMain
  }
  return { user, answerMODIFY }
}

module.exports = {
  seekAnswer
}
