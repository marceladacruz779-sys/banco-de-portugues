 const express = require('express');
const router = express.Router();
const dificuldadeController = require('../Controllers/dificuldadeControllers');

router.get('/dificuldade', dificuldadeController.l);


module.exports = router;