const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String }
})

userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

module.exports = mongoose.model('User', userSchema);