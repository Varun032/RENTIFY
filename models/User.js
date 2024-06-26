const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ['seller', 'buyer'], required: true }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
