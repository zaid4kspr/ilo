var express = require('express');
var path = require('path');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname, '/../views/index'));
  // res.sendFile(path.join(.html'))
});

module.exports = router;
