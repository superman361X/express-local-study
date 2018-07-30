const utils = require('../../../utils/utils');
const user = require('../../models/user/user');

class User {

  async list(req, res) {
    let result = await user.list();
    res.send(utils.httpResponse(0, result, ''));
  }

  async add(req, res) {
    let result = await user.add();
    res.send(utils.httpResponse(0, result, ''));
  }

}

module.exports = new User();
