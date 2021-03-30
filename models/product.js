const mongoose = require('../db/connection.js');
const { Schema } = mongoose;

const productSchema = new Schema({
   name: { type: String, required: true },
   description: String,
   img: String,
   price: { type: Schema.Types.Decimal128, min: 0 },
   qty: { type: Number, min: 0 }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
