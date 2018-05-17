const next = require('next')
const express = require('express')
const initialize = require('./express')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express()
  initialize(server, dev)
  routes(server, dev)
  server.get('*', (req, res) => handle(req, res))

  // Express app here:
  // https://github.com/mluberry/nextjs-express
  // server.get('*', (req, res) => {
  //   return handle(req, res)
  // })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('Server ready on http://localhost:3000')
  })
})
