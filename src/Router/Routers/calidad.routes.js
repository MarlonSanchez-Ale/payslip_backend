const express = require('express')
const CalidadController = require('../../Controllers/CalidadController')
const router = express.Router()

router.get('/', CalidadController.getAllCalidad);

module.exports = router;