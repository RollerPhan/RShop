const express = require('express')
const router = express.Router()
const buy_controller = require('../controllers/buy-controller')

router.get('/:id',buy_controller.homeGet)

module.exports = router