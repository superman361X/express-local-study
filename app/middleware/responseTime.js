/**
 * 请求响应时间
 * @returns {Function}
 */
module.exports = () => {
  return (req, res, next) => {
    global._startTime = new Date()
    next()
  }
};