const Commander = require('../../models/example/intell/Commander');
const CommanderPosition = require('../../models/example/intell/CommanderPosition');
const Org = require('../../models/example/intell/Org');
const Platform = require('../../models/example/intell/Platform');
const ArmType = require('../../models/example/intell/ArmType');
const ArmRole1 = require('../../models/example/intell/ArmRole1')
const ArmRole2 = require('../../models/example/intell/ArmRole2')
const Source = require('../../models/example/intell/Source');

exports.createCommander = async (req, res) => {
    try {
        console.log(req.body)
        res.send(await new Commander(req.body).save())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.listCommander = async (req, res) => {
    try {
        res.send(await Commander.find())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.createCommanderPosition = async (req, res) => {
    try {
        console.log(req.body)
        res.send(await new CommanderPosition(req.body).save())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.listCommanderPosition = async (req, res) => {
    try {
        res.send(await CommanderPosition.find())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.createOrg = async (req, res) => {
    try {
        console.log(req.body)
        res.send(await new Org(req.body).save())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.listOrg = async (req, res) => {
    try {
        res.send(await Org.find())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.createPlatform = async (req, res) => {
    try {
        console.log(req.body)
        res.send(await new Platform(req.body).save())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.listPlatform = async (req, res) => {
    try {
        res.send(await Platform.find())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.createArmType = async (req, res) => {
    try {
        console.log(req.body)
        res.send(await new ArmType(req.body).save())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.listArmType = async (req, res) => {
    try {
        res.send(await ArmType.find())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.createArmRole1 = async (req, res) => {
    try {
        console.log(req.body)
        res.send(await new ArmRole1(req.body).save())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.listArmRole1 = async (req, res) => {
    try {
        res.send(await ArmRole1.find())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.createArmRole2 = async (req, res) => {
    try {
        console.log(req.body)
        res.send(await new ArmRole2(req.body).save())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.listArmRole2 = async (req, res) => {
    try {
        res.send(await ArmRole2.find())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.createSource = async (req, res) => {
    try {
        console.log(req.body)
        res.send(await new Source(req.body).save())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}
exports.listSource = async (req, res) => {
    try {
        res.send(await Source.find())
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error!!!')
    }
}