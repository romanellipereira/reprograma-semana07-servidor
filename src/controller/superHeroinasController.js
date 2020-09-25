// importar o superHeroinas.json para dentro do controller:
const superHeroinas = require("../model/superHeroinas.json");

// const getAll armazena uma função que recebe uma requisição e uma resposta:
const getAll = (req, res) =>  {
    console.log(req.url); // ver a url
    res.send(superHeroinas); //enviar como resposta a const declarada acima, que contém o json
};

// disponibilizar a const (função) para ser utilizada em outros arquivos
module.exports = { getAll }; // esta notação {} é para que possam ser incluídas outras consts depois