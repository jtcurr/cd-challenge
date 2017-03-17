var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

app.set('views', __dirname + '/app');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.render('index.html')
})

app.listen(3000, function (res, req) {
	console.log('Listening on port ' + port)
});