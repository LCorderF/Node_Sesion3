var express = require('express');
var app = express();
var puerto = 3000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
	res.render('./index', {nombre : "Luis"});
});

app.listen(puerto, () => {
	console.log("Ejecutandose en el ṕuerto ", puerto);
});