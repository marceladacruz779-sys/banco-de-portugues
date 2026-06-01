// Importa o Express para o uso do router
const express = require('express');
const router = express.Router();

// Importa o temaController
const TemaController = require('../controllers/temaControllers');

// Rota GET para filtragem por matéria
router.get('/:nomet', TemaController.buscarPorTema);

// Exporta a rota de tema
module.exports = router;
