const Post = require('../../../models/Post');
const keys = require('../../../config/keys');
const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const helper = require('../../../helpers');

exports.create = (req, res) => {
    console.log(req.cookies);
    console.log(req.user)
}