const express = require('express');
const router = express.Router();
const controller = require('./board.controller');

router.get('/calendar', controller.calendar);
router.get('/join', controller.join);
router.post('/join_success',controller.join_success);
router.get('/login', controller.login);
router.post('/login_check', controller.login_check);
router.get('/logout',controller.logout);

module.exports = router;
