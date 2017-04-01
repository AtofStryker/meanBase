var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	id : Schema.ObjectId,
	firstName : String,
	lastName : String,
	address : String,
	company : String
});
var User = mongoose.model('user', userSchema);
module.exports = User;