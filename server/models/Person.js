const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    pic: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = Person = mongoose.model('people', PersonSchema);