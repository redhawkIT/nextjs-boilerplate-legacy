const next = require('next')
const express = require('express')
const configure = require('./configure')
const routes = require('./routes')
const config = require('../config')
const initialize = require('./init')

const { parse } = require('url')
// const Markdown = require('./controllers/Markdown')
const api = require('./controllers/Markdown')

const app = next({ dev: config.dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  // Initialize express instance
  const server = express()
  configure(server, config)
  routes(server, config)

  // Next.JS SSR handler
  // https://github.com/mluberry/nextjs-express
  server.get('/item', (req, res) => {
    const itemData = api.getItem()
    app.render(req, res, '/item', { itemData })
  })
  server.get('*', (req, res) => handle(req, res))

  // Enable server based on env
  initialize(server, config)
})
