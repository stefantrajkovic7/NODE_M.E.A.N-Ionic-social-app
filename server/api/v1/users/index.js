const middleware = require("../../../middleware");

const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.post('/register', controller.create);
router.post('/login', controller.find);
router.post('/follow', controller.followUser);
router.get('/:id', middleware.authenticate, controller.getUser);
router.get('', middleware.authenticate, controller.getAllUsers);

module.exports = router;