const _            = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

// MIDDLEWARE DE SUMARIZAÇÃO DOS PAGAMENTOS
function getSummary(req, res) {
  BillingCycle.aggregate({
    $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
  }, {
    $group: {_id: null, credit:{$sum: "$credit"}, debt: {$sum: "$debt"}}
  }, {
    $project: {_id: 0, credit: 1, debt: 1}
  }, function(err, result) {
    if(err) {
      res.status(500).json({errs: [err]})
    } else {
      res.json(_.defaults(result[0], {credit: 0, debt: 0}))
    }
  })
}

module.exports = { getSummary }
