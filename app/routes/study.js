const router = require('express').Router();
const study = require('../controllers/study/study');

router.get('/', study.index);

module.exports = router;
