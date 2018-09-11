const Post = require('../../../models/Post');
const keys = require('../../../config/keys');
const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const helper = require('../../../helpers');

exports.create = (req, res) => {
    const { error, value } = Joi.validate(req.body, helper.validatePost)
    
    if (error && error.details) {
        return res
            .status(HttpStatus.BAD_REQUEST)
            .json({ message: error.details });
    }

    const body = {
        user: req.user._id,
        username: req.user.username,
        post: req.body.post,
        created: new Date()
    };

    Post.create(body)
        .then(post => {
            res.status(HttpStatus.OK).json({ message: 'Success', post })
        })
        .catch(err => {
            res
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: 'Error occured' });
        })
}