const { Router } = require('express')
const { prefix, version } = require('./config')

const controllers = require('./controllers')
const middleware = require('./middleware')

module.exports = (server, dev) => {
  const routes = new Router()
  // NOTE: Example
  controllers.forEach(control => routes.use(control()))
  middleware.forEach(ware => routes.use(ware))

  // http://localhost:3000/api/v1/test
  routes.get('/test', (req, res) => res.json({ passed: true }))

  const apiRoute = `/${prefix}/${version}`
  server.use(apiRoute, routes)
}
