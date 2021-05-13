const express = require('express')
const router = express.Router()

const mainRouter = require('./main/index')
const boardRouter = require('./board/index')


router.use('/', mainRouter)
router.use('/board', boardRouter)

module.exports = router

