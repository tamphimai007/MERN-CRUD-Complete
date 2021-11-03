const mongoose = require('mongoose')
const fullSchema = mongoose.Schema({
    title: {
        type: String
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    color: {
        type: String
    },
    allDay: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = FullCalendar = mongoose.model('fullcalendars', fullSchema)