const Product = require('../models/product');
const debug = require('debug')('mongoose-store:controllers');

module.exports = {
    index
};

async function index(req, res) {
    const products = await Product.find();
    debug(products);

    res.render('products/index', {
        title: 'Index',
        products: products
    });
}

