const mongoose = require('mongoose');

const commanderSchema = new mongoose.Schema({
    commander: {
        type: String,
    },
}, { timestamps: true });

module.exports = Commander = mongoose.model('commanders', commanderSchema);