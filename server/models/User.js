const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = User = mongoose.model('user', UserSchema);