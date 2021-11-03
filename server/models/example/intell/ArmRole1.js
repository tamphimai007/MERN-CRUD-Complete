const mongoose = require('mongoose');

const armRole1Schema = new mongoose.Schema({
    armRole1: {
        type: String,
    },
}, { timestamps: true });

module.exports = ArmRole1 = mongoose.model('armRole1s', armRole1Schema);