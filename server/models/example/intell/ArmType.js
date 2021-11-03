const mongoose = require('mongoose');

const armTypeSchema = new mongoose.Schema({
    armType: {
        type: String,
    },
}, { timestamps: true });

module.exports = ArmType = mongoose.model('armtypes', armTypeSchema);