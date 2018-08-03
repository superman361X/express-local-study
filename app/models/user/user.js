const mysql = require('../../../clint/mysql');

class User {

  async list() {
    return await mysql.query('SELECT * FROM articles');
  }


  async add() {
    let sql = 'INSERT INTO articles(title,content,dateline) VALUES(?,?,?)';
    let data = [
      'Hi ShenZhen',
      'Nice to meet you !',
      '2018-07-24 21:54:09'
    ];
    return await mysql.query(sql, data);
  }
}

module.exports = new User();