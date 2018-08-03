//加载mysql模块
const redis = require('clint/redis');
const config = require('../config/db').redis;

class Redis {
  constructor() {
    //创建连接
    const client = redis.createClient(config);
  }
}

module.exports = new Redis;
