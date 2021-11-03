const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route   POST  localhost:8000/api/register
// @desc    route register
// @access  Public
exports.createRegister = async (req, res) => {
    const { name, password } = req.body;
    try {
        //Check user 
        let user = await User.findOne({ name });
        if (user) {
            return res.status(400)
                .json({ msg: 'User already exists' });
        }
        user = new User({
            name,
            password
        });

        // Encryt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        //payload return jsonwebtoken
        const payload = {
            user: {
                name: user.name,
                role: user.role
            }
        }
        jwt.sign(payload, 'jwtSecret',
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });

    } catch (err) {
        // check error
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}



// @route   POST  localhost:8000/api/login
// @desc    route login
// @access  Public
exports.login = async (req, res) => {
    const { name, password } = req.body;
    // console.log(name)
    try {
        //Check user 
        let user = await User.findOneAndUpdate({ name }, { new: true });
        if (!user) {
            return res.status(400)
                .json({ msg: 'username Invalid Credentials' });
        }

        // Compare Encryt password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400)
                .json({ errors: [{ msg: 'Password Invalid Credentials' }] });
        }

        //payload return jsonwebtoken
        const payload = {
            user: {
                id: user._id,
                name: user.name,
                role: user.role
            }
        }
        jwt.sign(payload, 'jwtSecret',
            { expiresIn: 3600 }, //หน่วยวินาที
            // { expiresIn: 10 },
            (err, token) => {
                if (err) throw err;
                res.json({ token, payload });
            });

    } catch (err) {
        // check error
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}


// @route   POST  localhost:8000/api/current-user
// @desc    route current-user
// @access  Private
exports.currentUser = async (req, res) => {
    User.findOne({ name: req.user.name }).select('-password').exec((err, user) => {
        if (err) throw new Error(err);
        res.json(user);
    })
}