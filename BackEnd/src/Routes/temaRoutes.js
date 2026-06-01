
const express = require('express');
const router = express.Router();


const TemaController = require('../controllers/temaControllers');


router.get('/:nomet', TemaController.buscarPorTema);


module.exports = router;