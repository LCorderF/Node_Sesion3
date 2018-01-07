var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var puerto = 3000;


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
	console.log(req.body);
});

app.listen(puerto, () => {
	console.log("V5 - Ejecutandose en el ṕuerto ", puerto);
});