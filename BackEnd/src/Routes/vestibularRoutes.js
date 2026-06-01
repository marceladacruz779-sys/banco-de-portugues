// Importa o Express para o uso do router
const express = require('express');
const router = express.Router();

// Importa o vestibularController
const VestibularController = require('../controllers/vestibularControllers');

// Rota GET para filtragem por banca
router.get('/:instituicao', VestibularController.buscarPorVestibular);

// Exporta a rota de vestibular
module.exports = router;
