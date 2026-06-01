const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/authControllers');


router.post('/login', AuthController.login);

module.exports = router;
