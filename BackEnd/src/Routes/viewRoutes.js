const express = require('express');
const router = express.Router();


const ViewController = require('../Controllers/viewController');

router.get('/', ViewController.listarTodos);

module.exports = router;
