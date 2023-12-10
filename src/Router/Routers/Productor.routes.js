const express = require('express');
const ProductorController = require('../../Controllers/ProductorController');
const router = express.Router();

router.get('/', ProductorController.getAllProductor);

module.exports = router;