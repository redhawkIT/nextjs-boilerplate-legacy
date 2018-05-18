const { Router } = require('express')
const controllers = require('./controllers')
const middleware = require('./middleware')

module.exports = (server, config) => {
  const { api: { prefix, version } } = config
  const API = new Router()
  controllers.forEach(Controller => new Controller(API))
  middleware.forEach(Middleware => new Middleware(API))

  // http://localhost:3000/api/v1/test
  // routes.get('/test', (req, res) => res.json({ passed: true }))

  server.use(`/${prefix}/v${version}`, API)
}
