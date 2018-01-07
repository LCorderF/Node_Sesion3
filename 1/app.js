var express = require('express');

var app = express();
var puerto = 3000;

app.get('/', function(req, res){
	res.send("Hola Mundo");
});

app.listen(puerto);
console.log("Ejecutandose en el puerto ", puerto);