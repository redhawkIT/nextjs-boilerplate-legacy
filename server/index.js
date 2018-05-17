const next = require('next')
const express = require('express')
const initialize = require('./express')
const routes = require('./routes')
const config = require('../config')

const { dev, ports } = config
const app = next({ dev })

app.prepare().then(() => {
  // Initialize express instance
  const server = express()
  initialize(server, config)
  routes(server, config)

  // Next.JS SSR handler
  // https://github.com/mluberry/nextjs-express
  const handle = app.getRequestHandler()
  server.get('*', (req, res) => handle(req, res))

  // Initialize prod/dev server
  if (config.prod) {
    const https = require('https')
    const http = require('http')
    const { key, cert } = config
    // HTTPS
    https
      .createServer({ key, cert }, server)
      .listen(ports.https, err => {
        if (err) throw err
        console.log(`> HTTPS Ready on ${config.ports.https}`)
      })
    // HTTP Redirect
    const redirectServer = express()
    redirectServer.get('*', (req, res) => {
      res.writeHead(302, { Location: `https://${req.headers.host}${req.url}` })
      res.end()
    })
    http
      .createServer(redirectServer)
      .listen(ports.http, err => {
        if (err) throw err;
        console.log(`> HTTP Redirect Enabled: ${ports.http} >>> ${ports.https}`);
      })
  } else {
    server.listen(ports.dev, (err) => {
      if (err) throw err
      console.log(`DEV Ready: http://localhost:${ports.dev}`)
    })
  }
  // console.log('CONFIG', config)
})
