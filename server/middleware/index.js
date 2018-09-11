const jwt = require('jsonwebtoken');
const HttpStatus = require('http-status-codes');
const config = require('../config/keys')

exports.authenticate = (req, res, next) => {
    const token = req.cookies.frenzy_token;

    if (!token) {
        return res.status(HttpStatus.FORBIDDEN).json({ message: 'ACCESS DENIED!' });
    }

    return jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            if (err.expiredAt < new Date()) {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .json({ message: 'Session has expired. Please login again', token: null });
            }
            next();
        }
        req.user = decoded.data;
        next();
    });
}