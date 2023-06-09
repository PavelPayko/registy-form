var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Cycling' });
});

const ctrlTelegram = require('../api/telegram');
router.post('/telegram', ctrlTelegram.sendMsg);

module.exports = router;
