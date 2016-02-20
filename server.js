var PORT = process.env.PORT || 3000;

var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compress = require('compression');
var passport = require('passport');
var mongoose = require('mongoose');
var router = express.Router();
var patternRoutes = express.Router();
var authRoutes = express.Router();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/studio_redfield_dev');
process.env.APP_SECRET = process.env.APP_SECRET || 'stefanredfield.com';

require('./api/controllers/PatternController')(patternRoutes);
require('./api/controllers/AuthController')(authRoutes);
require('./lib/passport_strategy')(passport);

app.use([
  express.static(path.join(__dirname, '/production')),
  bodyParser.json()
]);

app.use('/api', router);
app.use('/api', patternRoutes);
app.use('/api', authRoutes);

app.use(compress());

app.use(function(req, res, next) {
  console.log('404 - ' + req.method + ' ' + req.url);
  res.status(404)
    .json({
      success: false,
      message: '404 - Resource Not Found',
      result: req.method + ' ' + req.url
    });
});

app.listen(PORT, function() {
  console.log('SERVER IS WERKIN HARD ON PORT ' + PORT )
});



