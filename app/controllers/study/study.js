const utils = require('../../utils/utils');
const study = require('../../models/study/study');
const http = require('../../client/http');

class Study {
  async index(req, res) {
    let s = await study.data();
    console.log(s);
    res.send(s);
  }
}

module.exports = new Study();
