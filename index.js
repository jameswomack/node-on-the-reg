var isArray = require('amp-is-array')

module.exports = function exports (regexOrStringOrArgs) {
  if (regexOrStringOrArgs instanceof RegExp) {
    return regexOrStringOrArgs
  } else if (typeof regexOrStringOrArgs === 'string') {
    return new RegExp(regexOrStringOrArgs)
  } else if (isArray(regexOrStringOrArgs)) {
    var ctorContext = [ RegExp ].concat(regexOrStringOrArgs)

    return new (Function.prototype.bind.apply(RegExp, ctorContext))
  } else {
    throw new Error(String(regexOrStringOrArgs) +
        ' must be a RegExp, string or array of args to RegExp')
  }
}
