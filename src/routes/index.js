const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send({
        titulo: "Whishbooks =)",
        data: "24/09/2020"
    });
});

module.exports = router;