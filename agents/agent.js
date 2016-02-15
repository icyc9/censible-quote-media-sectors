var Agent = require('superagent-retry')(require('superagent')).agent
  , User  = require('./user')

module.exports = function () {
  if (!(this instanceof module.exports)) throw 'Must instantiate using "new" keyword'

//Request.call(this)
//Request.apply(this, arguments)

  var _agent = Agent()

  _agent['user'] = user
  _agent['cookies'] = cookies

  return _agent
}
//module.exports.prototype.__proto__ = Request.prototype

function user (agent) {
  console.log(this)
  return this
}

function cookies (access) {
  access.path = '/'
  access.secure = false
  access.script = false

  return this.jar.getCookies(access).toValueString()
}
