const express = require('express')
const router = express.Router();
const ReciboControllar = require('../../Controllers/ReciboController');

router.get('/', ReciboControllar.getAllRecibo);

module.exports = router;