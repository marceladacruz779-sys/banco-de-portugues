// Importar o Express para criar o router
const express = require('express');
const router = express.Router();

// Importar as funções do Controller
const TemaController = require('../controllers/temaControllers');

// DEFINIÇÃO DAS ROTAS

// GET /tema -- buscarPorTema
router.get('/:nomet', TemaController.buscarPorTema);

// EXPORTAR O ROUTER
module.exports = router;