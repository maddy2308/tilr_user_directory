// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    username: {type: String, unique : true, required : true },
    first_name: {type: String, required : true },
    last_name: String,
    address: String,
    date_of_birth: {type: Date, default: Date.now},
    phone: Number,
    email: String,
    photo: String,
    group: [String],
    password: String
}, {collection: 'User'}));