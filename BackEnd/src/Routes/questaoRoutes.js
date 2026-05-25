// Importar o Express para criar o router
const express = require('express');
const router = express.Router();

// Importar as funções do Controller
const QuestaoController = require('../controllers/questaoControllers');

// DEFINIÇÃO DAS ROTAS

// GET /questao -- listarQuestao
router.get('/', QuestaoController.listarQuestoes);

// EXPORTAR O ROUTER
module.exports = router;
