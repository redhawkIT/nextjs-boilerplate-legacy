const next = require('next')
const express = require('express')
const configure = require('./configure')
const routes = require('./routes')
const config = require('../config')
const initialize = require('./init')

const app = next({ dev: config.dev })
app.prepare().then(() => {
  // Initialize express instance
  const server = express()
  configure(server, config)
  routes(server, config)

  // Next.JS SSR handler
  // https://github.com/mluberry/nextjs-express
  const handle = app.getRequestHandler()
  server.get('*', (req, res) => handle(req, res))

  // Enable server based on env
  initialize(server, config)
})
