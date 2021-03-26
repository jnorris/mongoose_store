const Product = require('../models/product');
const debug = require('debug')('mongoose-store:controllers');

module.exports = {
    index,
    new: newProduct,
    create,
    show,
    edit,
    update,
    buy,
    delete: deleteProduct
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

async function edit(req, res) {
    const product = await Product.findById(req.params.id);
    debug(product);
    res.render('products/edit', {
        product
    });
}

async function update(req, res) {
    const q = await Product.updateOne({ _id: req.params.id }, { $set: req.body });
    debug(q);
    res.redirect('/products/' + req.params.id);
}

async function buy(req, res) {
    const product = await Product.findById(req.params.id);
    debug(product);
    product.qty--;
    product.save();
    res.redirect('/products/' + req.params.id);
}

async function deleteProduct(req, res) {
    await Product.deleteOne({ _id: req.params.id });
    res.redirect('/products');
}