const express = require('express')
const router = express.Router()
const controller = require('./board.controller')

router.get('/calendar', controller.calendar)
router.get('/join', controller.join)
router.get('/login', controller.login)
router.get('/logout',controller.logout);
router.post('/join_success',controller.join_success)
router.post('/login_check', controller.login_check);
router.post('/schedule',controller.schedule)

module.exports = router