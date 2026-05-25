// Importar o Express para criar o router
const express = require('express');
const router = express.Router();

// Importar as funções do Controller
const AreaController = require('../controllers/areaControllers');

// DEFINIÇÃO DAS ROTAS

// GET /area -- listar todos
router.get('/area', AreaController.filtragem);

// EXPORTAR O ROUTER
module.exports = router;