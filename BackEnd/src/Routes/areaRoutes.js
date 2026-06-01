
const express = require('express');
const router = express.Router();


const AreaController = require('../controllers/areaControllers');


router.get('/:nomea', AreaController.area);


module.exports = router;
