var express = require('express');
var links = require('../utils/links');
var router = express.Router();
var request = require('request');
/* GET home page. */

var fbCovers = [];
function setFBCover(key,value){
	fbCovers[key] = value;
}

function getFBCover(users){
	var self = this;
	self.users  = users;
	for(var key in self.users){
		var chave = key;
	    request.get("https://graph.facebook.com/" + self.users[key] + "?fields=cover", function(err, response, body) {
	        if (!err && response.statusCode == 200) {
	            self.coverpic = JSON.parse(body);
	            setFBCover(response.request.uri['pathname'].substring(1),self.coverpic["cover"]["source"]);
 			}
    	});
    }
};

var professores = {"lucas":"lukesodre","tino":"lucas.tino.18","sarah":"saahsodre","hesli":"hesli.brito","thayna":"carvalhothayna"}
getFBCover(professores);
 
router.get('/', function(req, res, next) {
  res.render('inovaBilingue', {
  "professores": [
    { "nome": "Lucas Sodre", "email": "lucasasodre@gmail.com", "experiencia": "" , "area": "", "foto":"http://graph.facebook.com/lukesodre/picture/?type=large",
    	"cover":  fbCovers[professores['lucas']] },
    { "nome": "Lucas Tino", "email": "", "experiencia": "" , "area": "", "cargo": "Coordenador","foto":"http://graph.facebook.com/lucas.tino.18/picture/?type=large",
		"cover":  fbCovers[professores['tino']]},
    { "nome": "Sarah Sodre", "email": "", "experiencia": "" , "area": "" ,"foto":"http://graph.facebook.com/saahsodre/picture/?type=large",
		"cover":  fbCovers[professores['sarah']]},
    { "nome": "Thayna Carvalho", "email": "", "experiencia": "" , "area": "","foto":"http://graph.facebook.com/carvalhothayna/picture/?type=large" ,
		"cover":  fbCovers[professores['thayna']]},
    { "nome": "Hesli Brito", "email": "", "experiencia": "" , "area": "" ,"foto":"http://graph.facebook.com/hesli.brito/picture/?type=large",
		"cover":  fbCovers[professores['hesli']]},
    { "nome": "Mais um", "email": "", "experiencia": "" , "area": "" }

  ],
  links: links
});

});

module.exports = router;

// router.get('/', function(req, res, next) {
//   res.render('inovaBilingue', {
//   "professores": [
//     { "nome": "Lucas Sodre", "email": "lucasasodre@gmail.com", "experiencia": "" , "area": "", "facebookId":"lukesodre"},
//     { "nome": "Lucas Tino", "email": "", "experiencia": "" , "area": "", "cargo": "Coordenador","facebookId":"lucas.tino.18"},
//     { "nome": "Sarah Sodre", "email": "", "experiencia": "" , "area": "" ,"facebookId":"saahsodre"},
//     { "nome": "Thayna Carvalho", "email": "", "experiencia": "" , "area": "","facebookId":"carvalhothayna"},
//     { "nome": "Hesli Brito", "email": "", "experiencia": "" , "area": "" ,"facebookId":"hesli.brito"},
//     { "nome": "Mais um", "email": "", "experiencia": "" , "area": "" }

//   ],
//   links: links
// });