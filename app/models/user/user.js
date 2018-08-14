const mysql = require('../../lib/client/mysql');


class User {

  list() {
    return mysql.query('SELECT * FROM articles');
  }


  add() {
    let sql = 'INSERT INTO articles(title,content,dateline) VALUES(?,?,?)';
    let data = [
      'Hi ShenZhen',
      'Nice to meet you !',
      '2018-07-24 21:54:09'
    ];
    return mysql.query(sql, data);
  }

  sleep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = [
          'Hi ShenZhen',
          'Nice to meet you !',
          '2018-08-04 21:54:09'
        ];
        resolve(data);
      }, 3000);
    });
  }

  send(mailOptions) {
    return new Promise((resolve, reject) => {
      let mailer = require('nodemailer');
      let mailConfig = require('../../../config/mail')["163"];
      mailer.createTransport(mailConfig).sendMail(mailOptions, (err, info) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }

  send2(mailOptions) {
    let mailer = require('nodemailer');
    let mailConfig = require('../../../config/mail')["163"];
    mailer.createTransport(mailConfig).sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

module.exports = new User();