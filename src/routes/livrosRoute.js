const express = require('express');
const router = express.Router();
const controller = require('../controller/livrosController');

// definir rotas:
router.get("/", controller.getAll);
router.get("/livros", controller.getAll);

module.exports = router;