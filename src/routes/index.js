// importar o express para utilizar a express.Router
const express = require('express');
const router = express.Router();

// metodo get para pegar a requisição do navegador e enviar uma resposta com base nos dados recebidos
router.get('/', (req, res) => {
    res.send({
        titulo: "Go, girls! As maiores e melhores Super Heroínas",
        data: "24/09/2020"
    })
});

// deixar a const router disponível:
module.exports = router;