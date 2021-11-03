const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
    org: {
        type: String,
    },
}, { timestamps: true });

module.exports = Org = mongoose.model('orgs', orgSchema);