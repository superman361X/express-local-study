const utils = require('../../../utils/utils');
const user = require('../../../http/models/user/user');
const http = require('../../../lib/client/http');

class User {

  index(req, res) {
    res.render('user/index', {title: 'Express'});
  }

  async upload(req, res) {
    let upload = require('../../../utils/upload');
    let result = await new upload().doUpload(req);
    let fileName = require('../../../../config/params').domain + '/uploads/' + result;
    res.send(utils.httpResponse(0, fileName, ''));

  }

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

  async sleep(req, res) {
    let resp = await user.sleep();
    res.send(utils.httpResponse(0, resp, ''));
  }

  async sendMail(req, res) {
    let mailOptions = {
      from: 'superman361X@163.com', // 发送者
      to: '554157247@qq.com', // 接受者,可以同时发送多个,以逗号隔开
      subject: 'mailer2.5.0邮件发送', // 标题
      //text: 'Hello world', // 文本
      html: `<h2>mailer基本使用:</h2><h3><a href="http://192.168.1.54:3000/user">http://192.168.1.54:3000/user</a></h3>`
    };

    await user.send(mailOptions);
    res.send(utils.httpResponse(0, 'success', ''));

  }

  sendMail2(req, res) {
    let mailOptions = {
      from: 'superman361X@163.com', // 发送者
      to: '554157247@qq.com', // 接受者,可以同时发送多个,以逗号隔开
      subject: 'mailer2.5.0邮件发送', // 标题
      //text: 'Hello world', // 文本
      html: `<h2>mailer基本使用:</h2><h3><a href="http://192.168.1.54:3000/user">http://192.168.1.54:3000/user</a></h3>`
    };

    user.send(mailOptions);
    res.send(utils.httpResponse(0, 'success', ''));

  }
}

module.exports = new User();
