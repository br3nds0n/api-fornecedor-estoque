const roteador = require('express').Router()

roteador.get('/', (requisição, resposta) => {
   resposta.send(
     JSON.stringify([]) 
   )}
)

module.exports = roteador