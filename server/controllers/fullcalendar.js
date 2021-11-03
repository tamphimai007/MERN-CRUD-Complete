const FullCalendar = require('../models/Fullcalendar');

exports.createFullcalendar = async (req, res) => {
    try {
        console.log('hello create full', req.body.values)
        const fullData = await new FullCalendar(req.body.values).save();
        res.send(fullData)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!!')
    }
}

exports.listFullcalendar = async (req, res) => {
    try {
        const fullData = await FullCalendar.find({}).exec();
        res.send(fullData)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!!')
    }
}

exports.listCurrentMonth = async (req, res) => {
    try {
        const d = new Date()
        const m = d.getMonth() + 1
        const dataCurrentMonth = await FullCalendar.find(
            {
                "$expr": {
                    "$eq": [{
                        "$month": "$start"
                    }, m]
                }
            }
        ).sort({ start: 1 }).exec();
        res.send(dataCurrentMonth)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!!')
    }
}




