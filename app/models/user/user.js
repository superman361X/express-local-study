const mysql = require('../../../services/mysql');

class User {

  async list() {
    //查
    //return await mysql.query('SELECT * FROM articles')
    let rows = await mysql.query('SELECT * FROM articles')
    //console.log(rows)
    return rows;
  }
}

module.exports = new User()