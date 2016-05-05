var mongoose = require('mongoose');

var infoSchema = mongoose.Schema({
    username: String,
    color: String,
    friend: String,
    place: String,
    place2: String,
    animal: String,
    dessert: String
    
});

var Info = mongoose.model('Info', infoSchema);
module.exports = Info;