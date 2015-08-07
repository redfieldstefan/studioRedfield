var PORT = process.env.PORT || 3000;

var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

process.env.APP_SECRET = process.env.APP_SECRET || 'stefanredfield.com'

app.use([
  express.static(path.join(__dirname, '/public')),
  bodyParser.json()
]);

app.listen(PORT, function() {
  console.log('SERVER IS WERKIN HARD ON PORT ' + PORT )
});



