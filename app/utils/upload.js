let multiparty = require('multiparty');
let util = require('util');
let fs = require('fs');
let path = require('path');
let params = require('../../config/params');

class Upload {

  constructor() {
    /* 生成multiparty对象，并配置上传目标路径 */
    this.form = new multiparty.Form();

    /* 设置编辑 */
    this.form.encoding = 'utf-8';

    //设置文件存储路劲
    this.form.uploadDir = params.uploadDir;

    //设置文件大小限制
    this.form.maxFilesSize = 2 * 1024 * 1024;
    // this.form.maxFields = 1000;  //设置所有文件的大小总和
  }

  doUpload(req) {
    return new Promise((resolve, reject) => {
      //上传后处理
      this.form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);

        } else {
          let file = files.file[0];
          let uploadedPath = file.path;
          let fileName = Number(new Date()) + path.extname(file.originalFilename);
          let dstPath = this.form.uploadDir + fileName;

          //重命名为真实文件名
          fs.rename(uploadedPath, dstPath, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(fileName);
            }
          });
        }
      });
    });

  }

}


module.exports = Upload;
