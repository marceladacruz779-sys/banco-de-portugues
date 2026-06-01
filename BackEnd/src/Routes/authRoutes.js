// Importa o Express para o uso do router
const express = require('express');
const router = express.Router();

// Importa o authController
const AuthController = require('../Controllers/authControllers');

// Rota POST para login
router.post('/login', AuthController.login);

// Exporta a rota de login
module.exports = router;
