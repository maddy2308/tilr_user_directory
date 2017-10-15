// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Contact', new Schema({
    first_name: String,
    last_name: String,
    address: String,
    date_of_birth: {type: Date, default: Date.now},
    phone: Number,
    email: String,
    photo: String,
    group: [String],
    password: String,
    admin: {type: Boolean, default: Date.now},
}, {collection: 'Contact'}));