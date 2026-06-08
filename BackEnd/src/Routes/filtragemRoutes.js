const express = require("express");
const router = express.Router();

const filtroController = require("../Controllers/filtragemController");

router.get("/", filtroController.buscarQuestoes);

module.exports = router;