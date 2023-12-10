const express = require('express');
const FincaController = require('../../Controllers/FincaController');
const router = express.Router();

router.get('/', FincaController.getAllFinca)

module.exports = router;