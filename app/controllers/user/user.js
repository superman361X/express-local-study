const utils = require('../../utils/utils');
const user = require('../../models/user/user');
const http = require('../../client/http');

class User {

  async list(req, res) {
    let result = await user.list();
    res.send(utils.httpResponse(0, result, ''));
  }

  async add(req, res) {
    let result = await user.add();
    res.send(utils.httpResponse(0, result, ''));
  }

  async payFree(req, res) {
    try {
      let result = await http.get('http://user.ms.cc/p1/user/free/' + req.params.id);
      res.send(utils.httpResponse(0, result.data, ''));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new User();
