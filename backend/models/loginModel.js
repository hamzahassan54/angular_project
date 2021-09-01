var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var userSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true, trim: true },
})
const User = mongoose.model('Users', userSchema)
module.exports = User;