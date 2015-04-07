var express = require('express');
var links = require('../utils/links');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inovaTalentos', {
  	links: links,
  "repo": [
    { "name": "resque" },
    { "name": "hub" },
    { "name": "rip" }
  ],

});

});

module.exports = router;
