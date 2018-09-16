const Post = require('../../../models/Post');
const User = require('../../../models/User');
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
        .then(async post => {
            await User.update(
                {
                    _id: req.user._id
                },
                {
                    $push: {
                        posts: {
                            postId: post._id,
                            post: req.body.post,
                            created: new Date()
                        }
                    }
                }
            );
            res.status(HttpStatus.OK).json({ message: 'Success', post })
        })
        .catch(err => {
            console.log(err)
            res
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: 'Error occured' });
        })
}

exports.list = async (req, res) => {
    try {
        const posts = await Post.find({})
            .populate('user')
            .sort({ created: -1 });

            return res.status(HttpStatus.OK).json({ message: 'Success', posts });
    } catch (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error Ocurred', err });
    }
}