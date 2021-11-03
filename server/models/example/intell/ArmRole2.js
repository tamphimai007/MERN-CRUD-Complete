const mongoose = require('mongoose');

const armRole2Schema = new mongoose.Schema({
    armRole2: {
        type: String,
    },
}, { timestamps: true });

module.exports = ArmRole2 = mongoose.model('armRole2s', armRole2Schema);