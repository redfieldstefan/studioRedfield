'use strict';

var eat = require('eat');
var User = require('../api/models/User');

module.exports = function(secret) {
  return function(req, res, next) {
    var token = req.headers.eat || req.body.eat;
    if(!token){
      console.log('Unauthorized: No token in reqest');
      return res.status(401).json({msg:'Not authorized, No token'});
    }

    eat.decode(token, secret, function(err, decoded) {
      if(err){
        console.log(err);
        return res.status(401).json({msg: 'Not authorized, Error'});
      }

      User.findOne({specialId: decoded.id}, function(err, user) {
        if(err) {
          console.log(err);
          return res.status(401).json({msg: 'Not authorized, Error 2'});
        }

        if(!user) {
          console.log('no user found for that token');
          return res.status(401).json({msg: 'Not authorized, No User'});
        }

        req.user = user;
        next();
      });

    });
  };
};
