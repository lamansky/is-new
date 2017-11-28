'use strict'

const assert = require('assert')
const IsNew = require('.')

describe('IsNew', function () {
  it('should generate a function', function () {
    assert.strictEqual(typeof IsNew(), 'function')
  })
})

describe('isNew()', function () {
  it('should return true for a new object', function () {
    const isNew = IsNew()
    assert(isNew({}))
  })

  it('should return false for an old object', function () {
    const isNew = IsNew()
    const val = {}
    assert(isNew(val))
    assert(!isNew(val))
  })

  it('should return true for a new function', function () {
    const isNew = IsNew()
    assert(isNew(() => {}))
  })

  it('should return false for an old function', function () {
    const isNew = IsNew()
    const val = () => {}
    assert(isNew(val))
    assert(!isNew(val))
  })

  for (const val of [null, undefined, Infinity, NaN]) { // eslint-disable-line no-undefined
    it('should return true the first time seeing ' + val, function () {
      const isNew = IsNew()
      assert(isNew(val))
    })

    it('should return false the second time seeing ' + val, function () {
      const isNew = IsNew()
      assert(isNew(val))
      assert(!isNew(val))
    })
  }

  for (const [type, val] of Object.entries({boolean: true, string: 'test', number: 123, symbol: Symbol('test')})) {
    it('should return true for a new ' + type, function () {
      const isNew = IsNew()
      assert(isNew(val))
    })

    it('should return false for an old ' + type, function () {
      const isNew = IsNew()
      assert(isNew(val))
      assert(!isNew(val))
    })
  }
})
