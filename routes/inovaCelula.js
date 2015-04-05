var express = require('express');
var links = require('../utils/links');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inovaCelula',{
  links: links,
  	"celulas": [
	  		
			{
				"nome": "Celula Kadmiel",
				"img": "http://thumbs.dreamstime.com/x/grupo-de-pessoas-feliz-12917370.jpg",
				"lider": "Kadmiel",
				"anfitriao": "Kadmiel",
				"supervisor": "Pb. Junior e Dca. Sheila",
				"igreja": "Matrix",
				"dia": "Sábado",
				"horario": "20:00",
				"tipo": "Jovem",
				"bairro": "Bom Clima"
			},

			{
				"nome": "Celula Kadmiel",
				"img": "http://thumbs.dreamstime.com/x/grupo-de-pessoas-feliz-12917370.jpg",
				"lider": "Kadmiel",
				"anfitriao": "Kadmiel",
				"supervisor": "Pb. Junior e Dca. Sheila",
				"igreja": "Matrix",
				"dia": "Sábado",
				"horario": "20:00",
				"tipo": "Jovem",
				"bairro": "Bom Clima" },
{
				"nome": "Celula Kadmiel",
				"img": "http://thumbs.dreamstime.com/x/grupo-de-pessoas-feliz-12917370.jpg",
				"lider": "Kadmiel",
				"anfitriao": "Kadmiel",
				"supervisor": "Pb. Junior e Dca. Sheila",
				"igreja": "Matrix",
				"dia": "Sábado",
				"horario": "20:00",
				"tipo": "Jovem",
				"bairro": "Bom Clima" },
{
				"nome": "Celula Kadmiel",
				"img": "http://thumbs.dreamstime.com/x/grupo-de-pessoas-feliz-12917370.jpg",
				"lider": "Kadmiel",
				"anfitriao": "Kadmiel",
				"supervisor": "Pb. Junior e Dca. Sheila",
				"igreja": "Matrix",
				"dia": "Sábado",
				"horario": "20:00",
				"tipo": "Jovem",
				"bairro": "Bom Clima" },
{
				"nome": "Celula Kadmiel",
				"img": "http://thumbs.dreamstime.com/x/grupo-de-pessoas-feliz-12917370.jpg",
				"lider": "Kadmiel",
				"anfitriao": "Kadmiel",
				"supervisor": "Pb. Junior e Dca. Sheila",
				"igreja": "Matrix",
				"dia": "Sábado",
				"horario": "20:00",
				"tipo": "Jovem",
				"bairro": "Bom Clima" },
{
				"nome": "Celula Kadmiel",
				"img": "http://thumbs.dreamstime.com/x/grupo-de-pessoas-feliz-12917370.jpg",
				"lider": "Kadmiel",
				"anfitriao": "Kadmiel",
				"supervisor": "Pb. Junior e Dca. Sheila",
				"igreja": "Matrix",
				"dia": "Sábado",
				"horario": "20:00",
				"tipo": "Jovem",
				"bairro": "Bom Clima" },
{
				"nome": "Celula Kadmiel",
				"img": "http://thumbs.dreamstime.com/x/grupo-de-pessoas-feliz-12917370.jpg",
				"lider": "Kadmiel",
				"anfitriao": "Kadmiel",
				"supervisor": "Pb. Junior e Dca. Sheila",
				"igreja": "Matrix",
				"dia": "Sábado",
				"horario": "20:00",
				"tipo": "Jovem",
				"bairro": "Bom Clima" },
{
				"nome": "Celula Kadmiel",
				"img": "http://thumbs.dreamstime.com/x/grupo-de-pessoas-feliz-12917370.jpg",
				"lider": "Kadmiel",
				"anfitriao": "Kadmiel",
				"supervisor": "Pb. Junior e Dca. Sheila",
				"igreja": "Matrix",
				"dia": "Sábado",
				"horario": "20:00",
				"tipo": "Jovem",
				"bairro": "Bom Clima" },
{
				"nome": "Celula Kadmiel",
				"img": "http://thumbs.dreamstime.com/x/grupo-de-pessoas-feliz-12917370.jpg",
				"lider": "Kadmiel",
				"anfitriao": "Kadmiel",
				"supervisor": "Pb. Junior e Dca. Sheila",
				"igreja": "Matrix",
				"dia": "Sábado",
				"horario": "20:00",
				"tipo": "Jovem",
				"bairro": "Bom Clima" },
{
				"nome": "Celula Kadmiel",
				"img": "http://thumbs.dreamstime.com/x/grupo-de-pessoas-feliz-12917370.jpg",
				"lider": "Kadmiel",
				"anfitriao": "Kadmiel",
				"supervisor": "Pb. Junior e Dca. Sheila",
				"igreja": "Matrix",
				"dia": "Sábado",
				"horario": "20:00",
				"tipo": "Jovem",
				"bairro": "Bom Clima" },
			


  	]

  });

});

module.exports = router;
