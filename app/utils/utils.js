const response = require('./response');

const utils = {
  httpResponse(code = '0', data = {}, msg = '') {
    return new response(code, data, msg).response();
  }
};

module.exports = utils;
