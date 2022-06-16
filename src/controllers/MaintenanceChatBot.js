const {
  ChatBotStatics
} = require('../models')
const db = require('../models')
const { ValidationError } = require('sequelize')
// const Op = db.Sequelize.Op

const create = async (req, res) => {
  try {
    const result = await db.sequelize.transaction(async (t) => {
      console.log(req.body)
      const data = await ChatBotStatics.create(req.body, {
        transaction: t
      })
      return data
    })

    return res
      .status(201)
      .send({
        status: 201,
        response: result,
        message: 'Cadastrado com sucesso'
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

const modify = async (req, res) => {
  const { id } = req.params

  try {
    await db.sequelize.transaction(async (t) => {
      if (!id) {
        throw new ValidationError('Erro', [
          {
            message: 'Informe o codigo do brinde'
          }
        ])
      }
      const data = await ChatBotStatics.findByPk(id, {
        transaction: t
      })
      if (!data) {
        throw new ValidationError('Erro', [
          {
            message: 'Codigo inválido'
          }
        ])
      }
      await ChatBotStatics.update(req.body, {
        where: {
          id: id
        },
        transaction: t
      })
    })
    return res
      .status(200)
      .send({
        status: 200,
        response: null,
        message: 'Modificado com sucesso'
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
  create,
  modify
}