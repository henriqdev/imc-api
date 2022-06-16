const express = require('express')
const router = express.Router()
const {
  getMany,
  getIndex,
  modify,
  // create
} = require('../controllers/ImcUser')

// router.post('/create', create)

router.get('/getmany', getMany)

router.get('/getindex', getIndex)

router.patch('/modify', modify)

module.exports = router
