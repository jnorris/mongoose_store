const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/products');

/* GET home page. */
router.get('/', productsCtrl.index);

module.exports = router;
