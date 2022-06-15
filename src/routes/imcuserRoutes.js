const express = require('express')
const router = express.Router()
const {
  getMany,
  getIndex,
  modify,
  create
} = require('../controllers/ImcUser')

router.post('/create', create)

router.get('/getMany', getMany)

router.get('/getIndex', getIndex)

router.patch('/modify', modify)

module.exports = router
