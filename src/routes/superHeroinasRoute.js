const express = require('express');
const router = express.Router();
const controller = require('../controller/superHeroinasController');

router.get("/", controller.getAll);
router.get("/superheroinas", controller.getAll);

module.exports = router;