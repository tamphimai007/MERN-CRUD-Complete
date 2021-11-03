const mongoose = require('mongoose');

const platformTHSchema = new mongoose.Schema({
    platform: {
        type: String,
    },
}, { timestamps: true });

module.exports = Platform = mongoose.model('platforms', platformTHSchema);