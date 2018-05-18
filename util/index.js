const config = require('../config')

module.exports = {
  api: req => req
    ? `${req.protocol}://${req.get('Host')}/${config.api.prefix}/v${config.api.version}`
    : `/${config.api.prefix}/v${config.api.version}`
}
