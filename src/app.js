const express = require('express');
const app = express();

const index = require('./routes/index');
const superHeroinas = require('./routes/superHeroinasRoute');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada.');

    next()
});

app.use("/", index);
app.use("/superheroinas", superHeroinas);

module.exports = app;
