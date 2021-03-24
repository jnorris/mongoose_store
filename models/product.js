const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const debug = require('debug')('mongoose-store:models');

const productSchema = new Schema({
   name: String,
   description: String,
   img: String,
   price: Number,
   qty: Number 
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
