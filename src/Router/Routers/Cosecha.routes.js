const express = require('express')
const CosechaController = require('../../Controllers/CosechaController')
const router = express.Router();

router.get('/', CosechaController.getAllCosecha);

module.exports = router;