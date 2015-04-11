var express = require('express');
var links = require('../utils/links');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.locals = {'title': "#INOVA Acampa",
  pageName: "#INOVA Musica",
  pageDescription: "Aqui voce encontra todas as musicas do INOVA, Com direito a letra, cifra e download do MP3. <br><br> Aproveite e nao esqueca de assitir aos videos do nosso canal e curtir nossa pagina no Facebook",
  // pageVideo: "",
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
        description: 'partials/descriptionSemVideo',
      }
    }
  );
});

module.exports = router;
