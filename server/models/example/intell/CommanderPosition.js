const mongoose = require('mongoose');

const commanderPositionsSchema = new mongoose.Schema({
    commanderPosition: {
        type: String,
    },
}, { timestamps: true });

module.exports = CommanderPosition = mongoose.model('commanderspositions', commanderPositionsSchema);