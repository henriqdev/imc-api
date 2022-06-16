const express = require('express')
const router = express.Router()
const {
  create,
  modify
} = require('../controllers/MaintenanceChatBot')
const { seekAnswer } = require('../controllers/factory/QuestionAnalyzer')

router.post('/create', create)
router.patch('/modify/:id', modify)

router.post('/answer', seekAnswer)

module.exports = router
