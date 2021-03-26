const express = require('express');
const router = require("express-promise-router")();

const productsCtrl = require('../controllers/products');

router.get('/', productsCtrl.index);
router.get('/new', productsCtrl.new);
router.post('/', productsCtrl.create);
router.get('/:id', productsCtrl.show);
router.get('/:id/edit', productsCtrl.edit);
router.put('/:id', productsCtrl.update);
router.post('/:id/buy', productsCtrl.buy);
router.delete('/:id', productsCtrl.delete);

module.exports = router;
