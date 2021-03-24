const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const debug = require('debug')('mongoose-store:models');
debug('foo');

const productSchema = new Schema({
   name: String,
   description: String,
   img: String,
   price: Number,
   qty: Number 
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

const product1 = {
   name: "Niko",
   description: "A cat",
   img: "",
   price: 500,
   qty: 1
};

//Product.create(product1).then((p) => { debug(p); }, (error) => { debug(error); });

Product.find((err, products) => {
   debug(products);
});

module.exports = Product;
