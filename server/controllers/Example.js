const express = require('express')

const Example = () => {
  const router = new express.Router()
  router.get('/test', (req, res) => res.json({ passed: true }))
  return router
}

module.exports = Example
