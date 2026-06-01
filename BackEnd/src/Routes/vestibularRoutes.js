
const express = require('express');
const router = express.Router();


const VestibularController = require('../controllers/vestibularControllers');


router.get('/:instituicao', VestibularController.buscarPorVestibular);


module.exports = router;
