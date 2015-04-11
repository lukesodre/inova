var express = require('express');
var links = require('../utils/links');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.locals = {'title': "#INOVA Acampa",
  pageName: "#INOVA Acampa",
  pageDescription: "Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses",
  pageVideo: "https://www.youtube.com/embed/kZTICyK3RAU",
  tabs: [
  {tabId: "/",tabName: "#INOVA"},
  {tabId: "#acampaDivergente",tabName: "Acampa Divergente"},
  {tabId: "#faccoes",tabName: "Facções"},
  {tabId: "#brincadeiras",tabName: "Brincadeiras"},
  {tabId: "#acampasAnteriores",tabName: "Acampa Anteriores"},
  ],
  links:links}, 
   res.render(
    'inovaMusica',
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
