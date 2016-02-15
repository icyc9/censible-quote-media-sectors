'use strict'

process.env.NODE_ENV = 'test'

global.context = describe

var chai = require('chai')
global.assert = chai.assert
global.expect = chai.expect


