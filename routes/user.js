const express = require('express');
const router = require("express-promise-router")();

const ctrl = require('../controllers/user');

router.get('/', ctrl.show);

module.exports = router;
