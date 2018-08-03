let axios = require('axios');

// 检验参数
let check = (options) => {
  return options || {};
};

// 处理请求
let request = (method, url, data, options) => {
  // 请求参数
  let requestOptionos = {
    url: url,
    data: data,
    method: method,
    timeout: 30000 // 超时时间设置为 30s
  };

  console.log(JSON.stringify(requestOptionos));

  // 追加请求
  if (options.headers) requestOptionos.headers = options.headers;
  if (options.params) requestOptionos.params = options.params;

  // 返回promise对象
  return new Promise((resolve, reject) => {
    axios.request(requestOptionos)
      .then(res => {
        resolve(res.data);
      }).catch(err => {
        console.log('开始抛出异常');
        console.error(err);
        reject(err);
      });
  });
};

const http = {
  // get 请求
  get (url, data = {}, options) {
    return request('get', url, data, check(options));
  },

  // post 请求
  post (url, data, options) {
    return request('post', url, data, check(options));
  },

  // patch 请求
  patch (url, data, options) {
    return request('PATCH', url, data, check(options));
  },

  // put 请求
  put (url, data, options) {
    return request('put', url, data, check(options));
  },

  // delete 请求
  delete (url, data, options) {
    return request('delete', url, data, check(options));
  }
};

module.exports = http;
