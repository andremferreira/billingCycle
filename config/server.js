// -- Constantes iniciais do projeto para server.js
const port       = 3003
const bodyParser = require('body-parser')
const express    = require('express')
const server     = express()
// -- Início das informações do servidor submetidas do formulário ao servidor
// -- Toda requisição que chegar irá passar por urlencoded e json (middleware)
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function(){
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
