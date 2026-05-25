const express = require('express');
const router = express.Router();

const DificuldadeController = require('../Controllers/dificuldadeControllers');

router.get('/Dificuldade', DificuldadeController.l);


module.exports = router;