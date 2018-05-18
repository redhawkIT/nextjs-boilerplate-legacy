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
  // https://github.com/zeit/next.js/tree/canary/examples/pass-server-data
  server.get('/markdown', (req, res) => {
    console.log('/markdown req:', req)
    const markdown = api.getMarkdown()
    app.render(req, res, '/markdown', { markdown })
  })
  server.get('*', (req, res) => handle(req, res))

  // Enable server based on env
  initialize(server, config)
})
