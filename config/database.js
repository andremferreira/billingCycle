//Pacote de conexão com o mongoDB
const mongoose = require('mongoose')
/*
   Conexao passando usuario e porta
  'mongodb://user:pass@localhost:port/db_finance'
*/
module.exports = mongoose.connect('mongodb://localhost/db_finance')
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado, é menor que o limite mínimo permitido de '{MIN}'."
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado, é maior que o limite máximo permitido de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é uma opção válida para o atributo '{PATH}'."
