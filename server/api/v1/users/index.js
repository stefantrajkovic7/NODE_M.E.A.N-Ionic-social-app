const middleware = require("../../../middleware");

const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.post('/register', controller.create);
router.post('/login', controller.find);
router.post('/follow', middleware.authenticate, controller.followUser);
router.post('/unfollow', middleware.authenticate, controller.unFollowUser);
router.get('/:id', middleware.authenticate, controller.getUser);
router.get('/name/:username', middleware.authenticate, controller.getUserByName);
router.get('', middleware.authenticate, controller.getAllUsers);

module.exports = router;