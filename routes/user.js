const router = require('express').Router();
const user = require('../app/controllers/user/user');

router.get('/', user.list);

router.get('/add', user.add );

module.exports = router;
