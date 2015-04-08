var express = require('express');
var links = require('../utils/links');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.locals = {'title': "#INOVA Acampa",
 	pageName: "#INOVA Acampa",
 	pageDescription: "Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses",
 	pageVideo: "https://www.youtube.com/embed/-by1dj-7qto",
	tabs: [
	{tabId: "/",tabName: "#INOVA"},
	{tabId: "#acampaDivergente",tabName: "Acampa Divergente"},
	{tabId: "#faccoes",tabName: "Facções"},
	{tabId: "#brincadeiras",tabName: "Brincadeiras"},
	{tabId: "#acampasAnteriores",tabName: "Acampa Anteriores"},
	],
	faccoes: [
		{nome:"Audácia",
		logo:"http://divergenteofilme.com.br/wp-content/themes/divergente/images/faccao-audacia-01.png",
		descricao:"É dedicada a coragem, bravura e destemor. Ela tenta lutar contra a covardia, dando a preparação e a capacidade de agir durante o medo aos seus membros.Audácia"},
		{nome:"Franqueza",
		logo:"http://divergenteofilme.com.br/wp-content/themes/divergente/images/faccao-franqueza-01.png",
		descricao:"É dedicada à Verdade, a Justiça e a Imparcialidade. Foi formada por aqueles que culparam a duplicidade por falhas da natureza humana."},
		{nome:"Abnegação",
		logo:"http://divergenteofilme.com.br/wp-content/themes/divergente/images/faccao-abnegacao-01.png",
		descricao:"É a única facção dedicada à abnegação, esquecendo de si para o bem dos outros. Sua substância na Cerimônia de Escolha são pedras cinzentas."},
		{nome:"Erudição",
		logo:"http://divergenteofilme.com.br/wp-content/themes/divergente/images/faccao-erudicao-01.png",
		descricao:"É dedicada preservação da lógica e conhecimento. Foi formada por aqueles que culparam a ignorância por falhas da natureza humana."},
		{nome:"Amizade",
		logo:"http://divergenteofilme.com.br/wp-content/themes/divergente/images/faccao-amizade-01.png",
		descricao:"É dedicada à paz, à bondade, ao perdão, à confiança, à autossuficiência e à neutralidade. Foi formada por aqueles que culparam a guerra e a luta por falhas da natureza humana."},
		],
	links:links},	
   res.render(
    'inovaAcampa',
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
