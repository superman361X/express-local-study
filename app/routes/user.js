const router = require('express').Router();
const user = require('../controllers/user/user');

router.get('/', user.list);

router.get('/add', user.add);

router.get('/pay/free/:id', user.payFree);

module.exports = router;
