module.exports = (server, config) => {
  const { ports } = config
  server.listen(ports.dev, (err) => {
    if (err) throw err
    console.log(`DEV Ready: http://localhost:${ports.dev}`)
  })
}
