var mongoose = require('mongoose');

var patternSchema = mongoose.Schema({
  image: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String}
});

module.exports = mongoose.model('Pattern', patternSchema);
