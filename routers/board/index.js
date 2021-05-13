const express = require('express')
const router = express.Router()
const controller = require('./board.controller')

router.get('/calendar', controller.calendar)
router.get('/join', controller.join)
router.get('/login', controller.login)
router.post('/join_success',controller.join_success)

module.exports = router