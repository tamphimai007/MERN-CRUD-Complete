const Exdropdownlist = require('../../models/example/DropdownList');


exports.createDropdown = async (req, res) => {
    try {
        // console.log(req.body)
        const dataDropdown = await new Exdropdownlist({ name: req.body.name }).save();
        res.send(dataDropdown)
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!')
    }
}

exports.listDropdown = async (req, res) => {
    try {
        // console.log(req.body)
        const dataDropdown = await Exdropdownlist.find({})
        res.send(dataDropdown)
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!')
    }
}