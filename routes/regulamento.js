var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {	
   res.render(
    'regulamento',
    {
      partials:
      {
        header: 'partials/header',
        description: 'partials/description',
      }
    }
  );
});


module.exports = router;
