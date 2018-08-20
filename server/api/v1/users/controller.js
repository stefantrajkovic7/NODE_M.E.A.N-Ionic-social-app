const User = require('../../../models/User');
const keys = require('../../../config/keys');
const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const helper = require('../../../helpers');

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
exports.create = (req, res) => {
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
    
};