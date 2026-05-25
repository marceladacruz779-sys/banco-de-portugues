// Importar o Express para criar o router
const express = require('express');
const router = express.Router();

// Importar as funções do Controller
const VestibularController = require('../controllers/vestibularControllers');

// DEFINIÇÃO DAS ROTAS

// GET /vestibular -- buscarPorVestibular
router.get('/:instituicao', VestibularController.buscarPorVestibular);

// EXPORTAR O ROUTER
module.exports = router;
