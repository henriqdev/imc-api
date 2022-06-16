const {
  ImcUsers
} = require('../models')
const db = require('../models')
const { ValidationError } = require('sequelize')
// const Op = db.Sequelize.Op

const createUser = async (body, t) => {
  console.log(body)
  const bodyUser = {
    name: body.name,
    age: body.age,
    height: body.height,
    weight: body.weight
  }
  const data = await ImcUsers.create(bodyUser, {
    transaction: t
  })
  return data
}

const getIndex = async () => {
  // const { cnbrinde } = req.params
  // try {
  //   const result = await db.sequelize.transaction(async (t) => {
  //     if (!cnbrinde) {
  //       throw new ValidationError('Erro', [
  //         {
  //           message: 'Informe o codigo do brinde'
  //         }
  //       ])
  //     }
  //     const data = await eventos_brindes.findByPk(cnbrinde, { transaction: t })

  //     if (!data) {
  //       throw new ValidationError('Erro', [
  //         {
  //           message: 'Codigo inválido'
  //         }
  //       ])
  //     }
  //     return data
  //   })

  //   return res
  //     .status(200)
  //     .send({
  //       status: 200,
  //       response: result,
  //       message: 'Busca efetuada'
  //     })
  // } catch (error) {
  //   console.error(error)
  //   const msgerro = []
  //   for (const e in error.errors) {
  //     msgerro.push({
  //       others: null,
  //       message: error.errors[e].message
  //     })
  //   }
  //   return res
  //     .status(400)
  //     .send({
  //       messageMain: 'Encontramos alguns erros',
  //       errors: msgerro
  //     })
  // }
}

const modify = async () => {
  // const { cnbrinde } = req.params

  // try {
  //   await db.sequelize.transaction(async (t) => {
  //     if (!cnbrinde) {
  //       throw new ValidationError('Erro', [
  //         {
  //           message: 'Informe o codigo do brinde'
  //         }
  //       ])
  //     }
  //     const data = await eventos_brindes.findByPk(cnbrinde, {
  //       transaction: t
  //     })
  //     if (!data) {
  //       throw new ValidationError('Erro', [
  //         {
  //           message: 'Codigo inválido'
  //         }
  //       ])
  //     }
  //     await validationFields(req.body, t)
  //     await eventos_brindes.update(req.body, {
  //       where: {
  //         cnbrinde: cnbrinde
  //       },
  //       transaction: t
  //     })
  //   })
  //   return res
  //     .status(200)
  //     .send({
  //       status: 200,
  //       response: null,
  //       message: 'Modificado com sucesso'
  //     })
  // } catch (error) {
  //   console.error(error)
  //   const msgerro = []
  //   for (const e in error.errors) {
  //     msgerro.push({
  //       others: null,
  //       message: error.errors[e].message
  //     })
  //   }
  //   return res
  //     .status(400)
  //     .send({
  //       messageMain: 'Encontramos alguns erros',
  //       errors: msgerro
  //     })
  // }
}

const getMany = async (req, res) => {
  try {
    const result = await db.sequelize.transaction(async (t) => {

      const data = await ImcUsers.findAll({
        transaction: t
      })
      if (data.length <= 0) {
        throw new ValidationError('Erro', [
          {
            message: 'Nenhuma registro encontrado'
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
  getMany,
  getIndex,
  modify,
  createUser
}
