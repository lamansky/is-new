'use strict'

const WeakishSet = require('weakish-set')

module.exports = function IsNew () {
  const seen = new WeakishSet()
  return val => !seen.has(val) && !!seen.add(val)
}
