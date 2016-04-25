"use strict";

var Pattern = require('../models/Pattern.js');
var bodyparser = require('body-parser');
var fs = require('fs');
var eatAuth = require('../../lib/eat_auth')(process.env.APP_SECRET || 'catwalk');
var urlify = require('../../lib/urlify');
var config = require('../../config/aws.js');
//AWS INFO

module.exports = function(router, key, secret) {

  router.use(bodyparser.json());

  router.post('/create-pattern', function(req, res) {
    var pattern = new Pattern();
    pattern.image = req.body.image;
    pattern.title = req.body.title;
    pattern.description = req.body.description;
    pattern.category = req.body.category;
    pattern.display = req.body.display;
    pattern.save(function(err, pattern) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'Internal Server Error'});
      }
      res.status(200).json({msg: 'Post succesful', pattern: pattern});
    })
  });

  router.get('/patterns', function(req, res) {
    Pattern.find({}, function(err, patterns) {
      if(err){
        console.log(err);
        return res.status(500).json({msg: 'Internal Server Error'});
      }
      var forReturn = {};
      patterns.forEach(function (pattern) {
        if(!forReturn[pattern.category]) {
          forReturn[pattern.category] = [];
        }
        forReturn[pattern.category].push(pattern);
      });
      return res.json({patterns: forReturn});
    });
  });

  router.get('/pattern/:id', function(req, res) {
    Pattern.findOne({_id: req.params.id}, function(err, pattern) {
      if(err){
        console.log(err);
        return res.status(500).json({msg: 'Internal Server Error'});
      }
      pattern.description = pattern.description.split('\n');
      return res.status(200).json({pattern: pattern});
    });
  });

  router.delete('/pattern/:id', function(req, res) {
    Pattern.remove({_id: req.params.id}, function(err, result) {
      if(err){
        console.log(err);
        return res.status(500).json({msg: 'Internal Server Error'});
      }
      res.status(200).json(result);
    });
  });

  router.get('/upload-config', eatAuth, function(req, res) {

    var AWS_config = {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey
    };

    res.json(AWS_config);
  });

};
