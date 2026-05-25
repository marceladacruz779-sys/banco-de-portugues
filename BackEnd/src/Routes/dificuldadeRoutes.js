// Importar o Express para criar o router
const express = require('express');
const router = express.Router();

// Importar as funções do Controller
const DificuldadeController = require('../controllers/dificuldadeControllers');

// DEFINIÇÃO DAS ROTAS

// GET /dificuldade -- buscarPorDificuldade
router.get('/', DificuldadeController.buscarPorDificuldade);

// EXPORTAR O ROUTER
module.exports = router;