const mongoose = require('./connection');
const debug = require('debug')('mongoose-store:db');

const Product = require('../models/product');

const seed = async () => {

    await Product.deleteMany({});

    const newProducts = [{
        name: "Niko",
        description: "A cat",
        img: "https://i.imgur.com/MQtKY8F.jpg",
        price: 500000,
        qty: 1
    }, {
        name: 'Beans',
        description: 'A small pile of beans. Buy more beans for a big pile of beans.',
        img: 'https://imgur.com/LEHS8h3.png',
        price: 5,
        qty: 99
    }, {
        name: 'Bones',
        description: 'It\'s just a bag of bones.',
        img: 'https://imgur.com/dalOqwk.png',
        price: 25,
        qty: 0
    }, {
        name: 'Bins',
        description: 'A stack of colorful bins for your beans and bones.',
        img: 'https://imgur.com/ptWDPO1.png',
        price: 7000,
        qty: 1
    }];

    var p = await Product.create(newProducts);

    const products = await Product.find();
    debug(products);
};

seed().catch((e) => {
    debug(e);
});