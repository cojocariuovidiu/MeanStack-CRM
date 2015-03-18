(function() { 
var mongoose = require('mongoose');
var Schema       = mongoose.Schema;
var bcrypt 	= require('bcrypt-nodejs');


var PostSchema = new Schema({
  title: String,
  comment: String,
  link: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

PostSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

module.exports = mongoose.model('Post', PostSchema);
}());