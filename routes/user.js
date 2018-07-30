var express = require('express');
var router = express.Router();


//加载mysql模块
var mysql = require('mysql');
//创建连接
var connection = mysql.createConnection({
    host: '192.168.1.45',
    user: 'root',
    password: 'root',
    database: 'wechat'
});

//SQL语句
var sql = 'SELECT * FROM articles';
var addSql = 'INSERT INTO articles(title,content,dateline) VALUES(?,?,?)';


router.get('/', (req, res, next) => {

    var addSqlParams = ['Hi ShenZhen', 'Nice to meet you !', '2018-07-24 21:54:09'];

    //增
    connection.query(addSql, addSqlParams, (err, result) => {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
    });

    //查
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        //把搜索值输出
        res.send(result);
    });
});

module.exports = router;
