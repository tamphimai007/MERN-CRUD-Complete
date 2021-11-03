const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
    source: {
        type: String,
    },
}, { timestamps: true });

module.exports = Source = mongoose.model('sources', sourceSchema);