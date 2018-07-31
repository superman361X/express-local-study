const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, './app/views'));
// app.engine('.html', require('ejs').__express);
// app.set('view engine', 'html');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//静态资源目录配置
app.use(express.static(path.join(__dirname, 'statics')));
//app.use('/static', express.static('public'));

// 计算接口请求时间
app.use(require('./app/http/middleware/responseTime')());

//加载路由
const router = require('./app/routes/base');
router(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
