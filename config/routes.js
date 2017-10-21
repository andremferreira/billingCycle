const express = require('express')
module.exports = function(server){
  // API DE ROTAS
  const router = express.Router()
  server.use('/api', router)

  // ROTAS DA API
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  //IMPORTANTE CONFERIR ROTA ANTES DE EFETUAR OS TESTE
  billingCycleService.register(router, '/billingCycles')

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}
