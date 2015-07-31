var Assert = require('assert')

var onTheReg = require('./')

var contexts = {
  supported : {
    regexps : /foo/g,
    strings : 'foo',
    arrays  : [ 'foo', 'g' ]
  },

  unsupported : {
    objects : {
      foo: 'g'
    }
  }
}

describe('otr', function () {
  Object.keys(contexts).forEach(function (contextKey) {
    var supported = contextKey === 'supported',
        context   = contexts[contextKey]

    Object.keys(context).forEach(function (typeKey) {
      var argument = context[typeKey]

      if (supported) {
        it('supports ' + typeKey, function () {
          Assert.ok(onTheReg(argument) instanceof RegExp)
        })
      } else {
        it('throws on ' + typeKey, function () {
          Assert.throws(function () { onTheReg(argument) })
        })
      }
    })
  })
})
