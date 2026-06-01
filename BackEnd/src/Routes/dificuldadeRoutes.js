
const express = require('express');
const router = express.Router();

const DificuldadeController = require('../controllers/dificuldadeControllers');




router.get('/:nomed', DificuldadeController.buscarPorDificuldade);

module.exports = router;