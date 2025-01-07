const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    gender: String,
    skills: Array,
    emailid:String,
    password:String
})

module.exports = mongoose.model('User', userSchema)