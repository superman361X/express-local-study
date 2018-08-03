//加载mysql模块
const mysql = require('mysql');
const config = require('../config/db').mysql;

class Mysql {
  constructor() {
    //创建连接
    this.pool = mysql.createPool(config);
  }

  query(sql, values) {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
            // 结束会话
            connection.release();
          });
        }
      });
    });
  }
}

module.exports = new Mysql;
