const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const stime = require('./app/middleware/responseTime');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'statics')));
//app.use('/static', express.static('public'));

// 计算接口请求时间
app.use(stime());

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


{

  let fs = require('fs');
  let readFile = (fileName) => {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, (error, data) => {
        if (error) {
          reject(error);
        }
        else {
          resolve(data);
        }
      });
    });
  };


  readFile('./0.txt').then((f5) => {
    console.log('f5 ' + f5.toString());
  });

  let asyncReadFile = async () => {
    let f1 = await readFile('./0.txt');
    let f2 = await readFile('./0.txt');
    let f3 = await readFile('./0.txt');

    console.log('f1 ' + f1.toString());
    console.log('f2 ' + f2.toString());
    console.log('f3 ' + f3.toString());
  };

  asyncReadFile();

  readFile('./0.txt').then((f0) => {
    console.log('f0 ' + f0.toString());
  });

  readFile('./0.txt').then((f4) => {
    console.log('f4 ' + f4.toString());
  });

}

module.exports = app;
