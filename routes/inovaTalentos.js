var express = require('express');
var links = require('../utils/links');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.locals = {'title': "#INOVA Talentos",
 	pageName: "#INOVA Talentos",
 	pageDescription: "Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses",
 	pageVideo: "https://www.youtube.com/embed/kmHAmCghgA4",
	tabs: [
	{tabId: "/",tabName: "#INOVA"},
	{tabId: "#episodios",tabName: "Episódios"},
	{tabId: "#videosRecomendados",tabName: "Vídeos Recomendados"},
	{tabId: "#materialComplementar",tabName: "Material Complementar"},
	],
	links:links},	
   res.render(
    'inovaTalentos',
    {
      partials:
      {
        header: 'partials/header',
        description: 'partials/description',
        regulamento: 'partials/regulamentoInovaTalentos',
      }
    }
  );
});




module.exports = router;
