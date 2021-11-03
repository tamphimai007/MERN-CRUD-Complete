const Fullcalendar = require('../../models/example/Fullcalendar')


exports.createFullcalendar = async (req, res) => {
    try {
        const eventData = await new Fullcalendar(req.body.value).save();
        res.send(eventData)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!!')
    }
}

exports.listFullcalendar = async (req, res) => {
    try {
        const eventData = await Fullcalendar.find({}).exec();
        res.send(eventData)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!!')
    }
}

exports.listMonthCurrent = async (req, res) => {
    try {
        var d = new Date()
        var m = d.getMonth() + 1;
        const eventData = await Fullcalendar.find(
            {
                "$expr": {
                    "$eq": [{
                        "$month": "$start"
                    }, m]
                }
            }
        ).sort({ start: 1 }).exec();
        res.send(eventData)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!!')
    }
}

exports.listCurrentDate = async (req, res) => {
    try {
        var d = new Date()
        // var m = d.getMonth() + 1;

        // มากกว่าวันที่ปัจจุบัน
        // const currentDate = await Fullcalendar.find({
        //     "start": { "$gte": d }
        // })

        // วันที่ปัจจุบัน
        // const dateCurrent = await Fullcalendar.find({
        //     "start": {
        //         $lt: d, //<
        //         $gte: new Date(new Date().setDate(new Date().getDate() - 1)) // >=
        //     }
        // })

        const dateCurrent = await Fullcalendar.find({
            "start": {
                $eq: d, //=
            }
        })
        console.log(d)
        res.send(d)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!!')
    }
}



exports.updateFile = async (req, res) => {
    try {
        const id = req.body.id
        const nameFile = req.file.filename
        const updateImage = await Fullcalendar.findOneAndUpdate({ _id: id }, { filename: nameFile })
        res.send(updateImage)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!!')
    }
}