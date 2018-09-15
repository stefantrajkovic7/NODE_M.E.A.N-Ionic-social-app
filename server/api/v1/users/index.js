const middleware = require("../../../middleware");

const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.post('/register', controller.create);
router.post('/login', controller.find);
router.get('/:id', middleware.authenticate, controller.getUser);

module.exports = router;