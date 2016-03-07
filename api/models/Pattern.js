var mongoose = require('mongoose');

var patternSchema = mongoose.Schema({
  image: {type: String, default: 'https://s3.amazonaws.com/studio-redfield-patterns/pattern-default.png'},
  title: {type: String, required: true},
  description: {type: String},
  category: {type: String},
  display: {type: String}
});

module.exports = mongoose.model('Pattern', patternSchema);
