module.exports = class Example {
  constructor (router) {
    router.get('/example', this.getData)
  }
  getData (req, res) {
    const data = { example: true }
    res.status(201).json(data)
  }
}
