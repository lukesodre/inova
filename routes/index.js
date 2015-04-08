var express = require('express');
var links = require('../utils/links');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.locals = {'title': "lucas",
	tabs: [
	{tabId: "#inovaIgreja",tabName: "#inova Igreja"},
	{tabId: "#inovaAcampa",tabName: "#inova Acampa"},
	{tabId: "#inovaComunidade",tabName: "#inova Comunidade"}
	],
	links:links},	
   res.render(
    'index',
    {
      partials:
      {
        header: 'partials/header',
        // description: 'partials/description',
      }
    }
  );
});

module.exports = router;
