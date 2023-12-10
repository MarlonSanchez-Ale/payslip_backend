const express = require('express');
const UMController = require('../../Controllers/UMController');
const router = express.Router();

router.get('/', UMController.getAllUM);

module.exports = router;