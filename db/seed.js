const mongoose = require('./connection');
const debug = require('debug')('mongoose-store:db');

const Product = require('../models/product');

const seed = async () => {

    await Product.deleteMany({});

    const product1 = {
        name: "Niko",
        description: "A cat",
        img: "",
        price: 500,
        qty: 1
    };

    var p = await Product.create(product1);

    const products = await Product.find();
    debug(products);
};

seed().catch((e) => { debug(e); });
