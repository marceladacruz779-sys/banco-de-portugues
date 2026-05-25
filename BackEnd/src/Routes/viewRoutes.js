const express = require('express');
const router = express.Router();

// Importar as funções do Controller
const ViewController = require('../Controllers/viewController');

router.get('/', ViewController.listarTodos);

module.exports = router;
