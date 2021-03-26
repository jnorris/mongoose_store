const Product = require('../models/product');
const debug = require('debug')('mongoose-store:controllers');

module.exports = {
    index,
    new: newProduct,
    create,
    show
};

async function index(req, res) {
    const products = await Product.find({});
    res.render('products/index', {
        products
    });
}

async function newProduct(req, res) {
    res.render('products/new');
}

async function create(req, res) {
    const product = await Product.create(req.body);
    debug(product);
    res.redirect('/products');
}

async function show(req, res) {
    const product = await Product.findById(req.params.id);
    debug(product);
    res.render('products/show', {
        product
    });
}