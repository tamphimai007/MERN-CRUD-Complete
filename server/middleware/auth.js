const jwt = require('jsonwebtoken');


exports.auth = (req, res, next) => {
    const token = req.headers['authtoken'];
    // console.log('Middleware', token);
    if (!token) {
        return res.status(401)
            .json({ msg: 'No token, authorization denied' });
    }

    // verify token
    try {
        const decoded = jwt.verify(token, 'jwtSecret');
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401)
            .json({ msg: 'Token is not valid' });
    }
}

exports.adminCheck = async (req, res, next) => {
    const { name } = req.user;
    const adminUser = await User.findOne({ name }).exec();

    if (adminUser.role !== 'admin') {
        res.status(403).json({ err: 'Admin Access denied' })
    } else {
        next();
    }
}