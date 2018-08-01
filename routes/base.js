module.exports = (app) => {
  app.use('/home', require('./home'));
  app.use('/user', require('./users'));
};