const mongooose = require('mongoose');

const dropdownSchema = mongooose.Schema({
    name: {
        type: String
    }
}, { timestamps: true })


module.exports = Dropdown = mongooose.model('dropdowns', dropdownSchema)