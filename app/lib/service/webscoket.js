const config = require('config-lite')(__dirname);
const webSocket = require('ws');
const wss = new webSocket.Server({
  port: config.webSocketPort || 8888
});

/**
 * @param {Promise} event 传入需要调用的 Promise 事件
 */
class WebSocketService {
  constructor() {}

  init(callback) {
    console.log('websocket 服务已启动');

    wss.on('connection', ws => {
      /**
       * @param {function} callback
       * 回调返回 ws 与 Message
       */
      ws.on('message', function incoming(message) {
        callback(ws, message);
      });
    });
  }
}

module.exports = new WebSocketService();