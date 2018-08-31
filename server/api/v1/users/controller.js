const User = require('../../../models/User');
const keys = require('../../../config/keys');
const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const helper = require('../../../helpers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * @api {post} /users/create Create user
 *
 * @apiName Register User
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Created New User
 *
 * @apiError (400) {String} message Validation error
 *
 * @apiError (500) {String} Internal Server error
 */
exports.create = async (req, res) => {
    const { error, value } = Joi.validate(req.body, helper.validateRegistration)
    if (error && error.details) {
        return res
            .status(HttpStatus.BAD_REQUEST)
            .json({ message: error.details });
    }

    const userEmail = await User.findOne({email: helper.lowerCase(req.body.email)});
    if (userEmail) {
        return res
            .status(HttpStatus.CONFLICT)
            .json({ message: 'Email already exist!' });
    }

    const userName = await User.findOne({
        username: helper.firstUpperCase(req.body.username)
    });
    if (userName) {
        return res
            .status(HttpStatus.CONFLICT)
            .json({ message: 'Username already exist!' });
    }

    return bcrypt.hash(value.password, 10, (error, hash) => {
        if (error) {
            return res
                .status(HttpStatus.BAD_REQUEST)
                .json({ message: 'Server Error' })
        }

        const body = {
            username: helper.firstUpperCase(value.username),
            email: helper.lowerCase(value.email),
            password: hash
        };

        User.create(body)
            .then((user) => {
                const token = jwt.sign({data: user}, keys.secret, {
                    expiresIn: '1h'
                });

                res.cookie('auth', token, { httpOnly: true });
                res
                    .status(HttpStatus.CREATED)
                    .json({ message: 'Success', user, token })
            })
            .catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR));
    });
    
};

exports.find = async (req, res) => {

    if (!req.body.username || !req.body.password) {
        return res.status(HttpStatus.NOT_FOUND).json({message: 'No empty fields allowed'});
    }

    await User.findOne({ username: helper.firstUpperCase(req.body.username) })
        .then(user => {
            if (!user) {
                return res.status(HttpStatus.NOT_FOUND).json({message: 'Username not found'});
            }
            return bcrypt.compare(req.body.password, user.password)
                .then(result => {
                    if (!result) {
                        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Validation Failed!' })
                    }
                    const token = jwt.sign({data: user}, keys.secret, {
                        expiresIn: '1h'
                    });
                    res.cookie('auth', token, { httpOnly: true });
                    return res.status(HttpStatus.OK).json({message: 'Success', user, token});
                });
        })
        .catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error ocurred'}));
}