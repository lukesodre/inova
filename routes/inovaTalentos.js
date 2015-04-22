var express = require('express');
var links = require('../utils/links');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.locals = {'title': "#INOVA Talentos",
 	pageName: "#INOVA Talentos",
 	pageDescription: "As inscrições para o INOVA Talentos 2015 " + 
                    "estão chegando ao fim.<br> Faça já sua inscrição  " +
                    "e não fique de fora deste evento!<br> " +
                    "As Audições estão marcadas para acontecerem " +
                    "no dia 10/05/2015.  <br><br>" +
                    "Confira os detalhes no nosso REGULAMENTO!",
 	pageVideo: "https://www.youtube.com/embed/kmHAmCghgA4",
	tabs: [
	{tabId: "/",tabName: "#INOVA"},
	{tabId: "#regulamento",tabName: "inscrições"},
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
