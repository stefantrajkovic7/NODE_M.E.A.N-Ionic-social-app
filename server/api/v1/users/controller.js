const User = require('../../../models/User');
const keys = require('../../../config/keys');
const Joi = require('joi');
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
    
    
};