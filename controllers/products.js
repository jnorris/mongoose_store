const Product = require('../models/product');
const debug = require('debug')('mongoose-store:controllers');

module.exports = {
    index,
    new: newProduct,
    create
};

async function index(req, res) {
    const products = await Product.find({});
    res.render('products/index', {
        title: 'Index',
        products: products
    });
}

async function newProduct(req, res) {
    res.render('products/new');
}

async function create(req, res) {
    debug(req.body);
    const product = Product.create(req.body);
    debug(product);
    res.redirect('/products');
}