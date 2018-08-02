const router = require('express').Router();
const user = require('../app/controllers/user/user');

router.get('/', user.list);

router.get('/add', (req, res, next) => {

  const addSql = 'INSERT INTO articles(title,content,dateline) VALUES(?,?,?)';

  var addSqlParams = ['Hi ShenZhen', 'Nice to meet you !', '2018-07-24 21:54:09'];



});

module.exports = router;
