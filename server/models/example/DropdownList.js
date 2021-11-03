const mongoose = require('mongoose');

const dropdownlistSchema = new mongoose.Schema({
    name: {
        type: String,
    },
}, { timestamps: true });

module.exports = Exdropdownlist = mongoose.model('exdropdownlists', dropdownlistSchema);