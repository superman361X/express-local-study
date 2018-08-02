let home = require('../app/routes/home');
let user = require('../app/routes/user');
let study = require('../app/routes/study');

module.exports = (app) => {
  app.use('/home', home);
  app.use('/user', user);
  app.use('/study', study);
};