// Importa o Express para o uso do router
const express = require('express');
const router = express.Router();

// Importa o areaController
const AreaController = require('../controllers/areaControllers');

// Rota GET para escolher uma das áreas (Literatura ou Gramática)
router.get('/:nomea', AreaController.area);

// Exporta a rota de área
module.exports = router;
