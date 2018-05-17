const { Router } = require('express')
const controllers = require('./controllers')
const middleware = require('./middleware')

module.exports = (server, config) => {
  const { api: { prefix, version } } = config
  const routes = new Router()
  controllers.forEach(control => routes.use(control()))
  middleware.forEach(ware => routes.use(ware))

  // http://localhost:3000/api/v1/test
  routes.get('/test', (req, res) => res.json({ passed: true }))

  server.use(`/${prefix}/${version}`, routes)
}
