const Dropdown = require('../models/Dropdown')

exports.createDropdown = async (req, res) => {
    try {
        const dropdownData = await new Dropdown(req.body).save()
        res.send(dropdownData)
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.listDropdown = async (req, res) => {
    try {
        const dropdownData = await Dropdown.find({}).exec();
        res.send(dropdownData)
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}