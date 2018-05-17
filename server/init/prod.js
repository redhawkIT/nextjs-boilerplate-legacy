const express = require('express')
const https = require('https')
const http = require('http')
const fs = require('fs')
const path = require('path')

module.exports = (server, config) => {
  const { ports, paths } = config
  // Read key files
  const key = fs.readFileSync(
    path.resolve(paths.cwd, 'config', paths.key),
    'utf-8'
  )
  const cert = fs.readFileSync(
    path.resolve(paths.cwd, 'config', paths.cert),
    'utf-8'
  )

  // HTTPS
  https
    .createServer({ key, cert }, server)
    .listen(ports.https, err => {
      if (err) throw err
      console.log(`> HTTPS Ready on ${ports.https}`)
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
      if (err) throw err
      console.log(`> HTTP Redirect Enabled: ${ports.http} >>> ${ports.https}`)
    })
}
