"use strict";

var Pattern = require('../models/Pattern.js');
var bodyparser = require('body-parser');
var fs = require('fs');
var eatAuth = require('../../lib/eat_auth')(process.env.APP_SECRET);
//AWS INFO
var AWS = require('aws-sdk');
var accessKeyId = process.env.AWS_ACCESS_KEY;
var secretAccessKey = process.env.AWS_SECRET_KEY;
var S3_BUCKET = process.env.S3_BUCKET;
var AWS_region = process.env.AWS_REGION;

var AWS_config = {
    accessKeyId: //NEED TO FIGURE OUT HOW TO DO THIS
    secretAccessKey: //NEED TO FIGURE OUT HOW TO DO THIS
};

module.exports = function(router) {

  router.use(bodyparser.json());

  router.post('/patterns', eatAuth, function(req, res) {
    var pattern = new Pattern();
    pattern.image = req.body.image;
    pattern.title = req.body.title;
    pattern.description = req.body.description;
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
      res.json({patterns: patterns});
    });
  });

  router.get('/pattern/:id', function(req, res) {
    pattern.findOne({_id: req.params.id}, function(err, pattern) {
      if(err){
        console.log(err);
        return res.status(500).json({msg: 'Internal Server Error'});
      }
      res.status(200).json({pattern: pattern});
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
    res.json(AWS_config);
  });

};
