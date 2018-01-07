var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var puerto = 3000;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/paises");
var userSchemaJSON ={
	nombre : String,
	apellido : String,
	email : String,
	edad : Number
};
var user_schema = new Schema(userSchemaJSON);
var User = mongoose.model('User', user_schema);


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.get('/', (req, res) => {
	res.render('./index', {nombre : "Luis"});
});

app.get('/nombre/:nombre', (req, res) => {
	res.render('./ShowName', {nombre : req.params.nombre});
});

app.get('/:nombre/:apellido', (req, res) => {
	res.render('./ShowName');
});

app.get('/registro', (req, res) => {
	res.render('./registro');
});

app.post('/registrar', (req, res) => {
	// res.render('./registro');
	// console.log(req.body);
	var user = new User ({
		nombre : req.body.nombre,
		apellido : req.body.apellido,
		email : req.body.email,
		edad : req.body.edad
	});
	user.save(function(){
		res.send('Usuario registrado');
	});
});

app.listen(puerto, () => {
	console.log("V6 - Ejecutandose en el ṕuerto ", puerto);
});