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

/*
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

  let readFile2 = (fileName, callback) => {
    fs.readFile(fileName, (error, data) => {
      if (error) {
        console.log(error);
      }
      else {
        callback(data.toString());
      }
    });
  };


  readFile2('./0.txt', (f8) => {
    console.log('f8 ' + f8.toString());
  });

  readFile('./0.txt').then((f5) => {
    console.log('f5 ' + f5.toString());
  });

  readFile2('./0.txt', (f6) => {
    console.log('f6 ' + f6.toString());
  });

  let asyncReadFile = async () => {
    let f1 = await readFile('./0.txt');
    let f2 = await readFile('./0.txt');
    let f3 = await readFile('./0.txt');

    console.log('f1 ' + f1.toString());
    console.log('f2 ' + f2.toString());
    console.log('f3 ' + f3.toString());
  };


  readFile('./0.txt').then((f7) => {
    console.log('f7 ' + f7.toString());
  });

  asyncReadFile();


  readFile('./0.txt').then((f0) => {
    console.log('f0 ' + f0.toString());
  });

  readFile('./0.txt').then((f4) => {
    console.log('f4 ' + f4.toString());
  });

}
*/


{

  /**
   * var 和 let 就有意思了，let声明的变量声明前使用也会报错，这个与const一致；最重要的一点是let声明了一个块级作用域的变量在一个块的“}”结束的时候，该变量消失。例子：
   */

    // (function (x, y) {
    //   var b = x;
    //   let c = y;
    //   if (true) {
    //     var b = 5;
    //     let c = 6;
    //     console.log(b);  //5
    //     console.log(c);  //6，这里的let c在下一行的"}"之后消失
    //   }
    //   console.log(b);  //5
    //   console.log(c);  //3 ，这里仍然是第三行的let c；
    // }(2, 3));


  // var a = 1;
  // var b = 2;
  // if (true) {
  //   var a = 3;
  //   let b = 4;
  //   console.log(a);
  //   console.log(b);
  // }
  //
  // console.log(a);
  // console.log(b);
}
module.exports = app;
