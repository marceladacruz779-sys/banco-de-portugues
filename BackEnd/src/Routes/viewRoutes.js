// Importa o Express para o uso do router
const express = require('express');
const router = express.Router();

// Importa o viewController
const ViewController = require('../Controllers/viewController');

// Rota GET para listar tudo
router.get('/', ViewController.listarTodos);

// Exporta a rota da View
module.exports = router;
