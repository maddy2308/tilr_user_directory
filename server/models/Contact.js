// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Contact', new Schema({
    first_name: {type: String, required : true },
    last_name: String,
    address: String,
    date_of_birth: {type: Date, default: Date.now},
    phone: Number,
    email: String,
    photo: String,
    group: [String],
    _user: {type: mongoose.Schema.ObjectId, ref: 'User', required: true, index: true}
}, {collection: 'Contact'}));