var express = require('express');
var links = require('../utils/links');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inovaBilingue', {
  "professores": [
    { "nome": "Lucas Sodre", "email": "", "experiencia": "" , "area": "", },
    { "nome": "Lucas Tino", "email": "", "experiencia": "" , "area": "", "cargo": "Coordenador"},
    { "nome": "Sarah Sodre", "email": "", "experiencia": "" , "area": "" },
    { "nome": "Thaina Carvalho", "email": "", "experiencia": "" , "area": "" },
    { "nome": "Hesli Capellari", "email": "", "experiencia": "" , "area": "" },
    { "nome": "Mais um", "email": "", "experiencia": "" , "area": "" }

  ],
  links: links
});

});

module.exports = router;
