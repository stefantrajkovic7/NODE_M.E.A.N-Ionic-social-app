const middleware = require("../../../middleware");

const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.post('/create', middleware.authenticate, controller.create);
router.get('/list', middleware.authenticate, controller.list);
// router.get('/current', middleware.authenticate, controller.current);

module.exports = router;