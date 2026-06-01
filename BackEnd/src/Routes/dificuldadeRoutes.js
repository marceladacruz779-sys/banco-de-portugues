// Importa o Express para o uso do router
const express = require('express');
const router = express.Router();

// Importa o dificuldadeController
const DificuldadeController = require('../controllers/dificuldadeControllers');
// Rota GET para filtragem por dificuldade
router.get('/:nomed', DificuldadeController.buscarPorDificuldade);

// Exporta a rota de difilculdade
module.exports = router;
