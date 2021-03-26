const express = require('express');
const router = require("express-promise-router")();

const productsCtrl = require('../controllers/products');

router.get('/', productsCtrl.index);
router.get('/new', productsCtrl.new);
router.post('/', productsCtrl.create);
router.get('/:id', productsCtrl.show);

module.exports = router;
