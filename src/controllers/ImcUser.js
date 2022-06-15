const {
  ImcUsers
} = require('../models')
const db = require('../models')
// const { ValidationError } = require('sequelize')
// const Op = db.Sequelize.Op

const create = async (req, res) => {
  try {
    const result = await db.sequelize.transaction(async (t) => {
      const data = await ImcUsers.create(req.body, {
        transaction: t
      })
      console.log(db)
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

const getMany = async () => {
  // try {
  //   const result = await db.sequelize.transaction(async (t) => {
  //     const {
  //       status,
  //       cnevento
  //     } = req.query
  //     const where = ArrayToWhere([
  //       { cnevento },
  //       { status }
  //     ])

  //     const data = await eventos_brindes.findAll({
  //       where: {
  //         ...where
  //       },
  //       include: [{
  //         model: produtos,
  //         as: 'produto'
  //       }],
  //       order: [['valorminimovenda', 'ASC']],
  //       transaction: t
  //     })
  //     if (data.length <= 0) {
  //       throw new ValidationError('Erro', [
  //         {
  //           message: 'Nenhuma brinde encontrado'
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

module.exports = {
  getMany,
  getIndex,
  modify,
  create
}
