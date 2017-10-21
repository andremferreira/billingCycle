// -- Constantes iniciais do projeto para loader.js
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)
