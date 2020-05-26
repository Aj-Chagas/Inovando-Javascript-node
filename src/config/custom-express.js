require('marko/node-require').install()
require('marko/express')

const express = require('express')
const app = express()
const route = require('../app/route/route')


route(app)

module.exports = app
