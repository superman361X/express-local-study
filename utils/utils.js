const response = require('./response')

const commonMethods = {
  httpResponse(code = '0', data = {}, msg = '') {
    return new response(code, data, msg).response()
  }
}

module.exports = commonMethods
