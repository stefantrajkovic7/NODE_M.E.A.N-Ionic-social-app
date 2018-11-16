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

                res.cookie('frenzy_token', token);
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
                    res.cookie('frenzy_token', token);
                    return res.status(HttpStatus.OK).json({message: 'Success', user, token});
                });
        })
        .catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error ocurred'}));
}

exports.getUser = async (req, res) => {
    await User
        .findOne({ _id: req.params.id })
        .populate('posts.postId')
        .populate('following.userFollowed')
        .populate('followers.follower')
        .then(user => res.status(HttpStatus.OK).json({ message: 'Success', user }))
        .catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error ocurred'}));
};

// exports.getUser = (req, res) => {
//     User
//         .findById(req.params.id)
//         .then(user => res.json(user))
//         .catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error ocurred'}));
// };

exports.getUserByName = async (req, res) => {
    await User
        .findOne({ username: req.params.username })
        .populate('posts.postId')
        .populate('following.userFollowed')
        .populate('followers.follower')
        .then(user => res.status(HttpStatus.OK).json({ message: 'Success', user }))
        .catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error ocurred'}));
};

exports.getAllUsers = async (req, res) => {
    await User.find({})
        .populate('posts.postId')
        .populate('following.userFollowed')
        .populate('followers.follower')
        .then(result => res.status(HttpStatus.OK).json({ message: 'All Users List', result }))
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error Occured', err }));
}

exports.followUser = (req, res) => {
    const following = async () => {
        await User.update(
            {
                _id: req.user._id,
                "following.userFollowed": { $ne: req.body.userFollowed }
            },
            {
                $push: {
                    following: {
                        userFollowed: req.body.userFollowed
                    }
                }
            }
        )

        await User.update(
            {
                _id: req.body.userFollowed,
                "following.follower": { $ne: req.user._id }
            },
            {
                $push: {
                    followers: {
                        follower: req.user._id
                    },
                    notifications: {
                        senderId: req.user._id,
                        message: `${req.user.username} is now following you.`,
                        created: new Date(),
                        viewProfile: false
                    }
                }
            }
        )
    };

    following()
        .then(() => res.status(HttpStatus.OK).json({ message: 'Success'}))
        .catch(() => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error ocurred'}));
}

exports.unFollowUser = (req, res) => {
    const unFollowing = async () => {
        await User.update(
            {
                _id: req.user._id
            },
            {
                $pull: {
                    following: {
                        userFollowed: req.body.userFollowed
                    }
                }
            }
        )

        await User.update(
            {
                _id: req.body.userFollowed
            },
            {
                $pull: {
                    followers: {
                        follower: req.user._id
                    }
                }
            }
        )
    };

    unFollowing()
        .then(() => res.status(HttpStatus.OK).json({ message: 'Success'}))
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({err, message: 'Error ocurred'}));
}

exports.markNotification = async (req, res) => {
    if (!req.body.deleteAction) {
        await User.updateOne(
            {
                _id: req.user._id,
                'notifications._id': req.params.id
            }, 
            {
                $set: { 'notifications.$.read': true }
            }
        ).then(() => res.status(HttpStatus.OK).json({message: 'Success'}))
         .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({err, message: 'Error Ocurred!'}))
    }
}