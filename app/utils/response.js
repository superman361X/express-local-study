class httpResponse {

  constructor(code, data, msg) {
    this.data = data;
    this.msg = msg;
    this.code = code;
    // 初始化
    this.init();
  }

  // 初始化方法
  init() {
    // 初始化调用扩展
  }

  response() {

    let data = {
      code: this.code
    };

    if (parseInt(this.code) === 0) {
      //console.log(data.data)
      data.data = this.data;
    } else {
      data.msg = this.msg;
    }

    data.time = this.calcTime();
    return data;
  }

  // 计算接口响应时间
  calcTime() {
    let responseTime = 0;
    if (global._startTime != undefined) {
      responseTime = ((new Date()) - global._startTime) / 1000;
      global._startTime = null;
      delete global._startTime;
    }
    return responseTime.toString() + 's';
  }

}

module.exports = httpResponse;
