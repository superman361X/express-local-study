const mysql = require('../../../services/mysql');

class User {

  async list() {
    //查
    return await mysql.query('SELECT * FROM articles')
  }
}

module.exports = new User()