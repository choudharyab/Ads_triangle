'use strict';

const controllers = require('../controller/apiController')
const router = require('express').Router()


router.get("/", controllers.exportMargin);

module.exports = router
