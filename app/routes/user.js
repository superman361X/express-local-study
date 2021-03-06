const router = require('express').Router();
const user = require('../controllers/user/user');

router.get('/', user.index);

router.get('/list', user.list);

router.get('/add', user.add);

router.get('/pay/free/:id', user.payFree);

router.get('/sleep', user.sleep);

router.get('/send', user.sendMail);

router.get('/send2', user.sendMail2);

router.post('/upload', user.upload);

router.get('/async', (req, res) => {
  setTimeout(() => {
    res.send({key: 'key', val: 'val'});
  }, 10000);

  console.log('ko');
});

module.exports = router;
