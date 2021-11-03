const mongoose = require('mongoose');

const fullcalendarSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    filename: {
        type: String
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    color: {
        type: String
    },
    allDay: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = Fullcalendar = mongoose.model('exfullcalendars', fullcalendarSchema);