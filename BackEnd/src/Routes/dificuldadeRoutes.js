<<<<<<< Updated upstream
const express = require('express');
const router = express.Router();

const DificuldadeController = require('../Controllers/dificuldadeControllers');

router.get('/Dificuldade', DificuldadeController.l);
=======
 const express = require('express');
const router = express.Router();
const dificuldadeController = require('../Controllers/dificuldadeControllers');

router.get('/dificuldade', dificuldadeController.l);
>>>>>>> Stashed changes


module.exports = router;