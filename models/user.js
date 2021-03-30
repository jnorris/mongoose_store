const mongoose = require('../db/connection.js');
const { Schema } = mongoose;

const userSchema = new Schema({
   username: { type: String, required: true },
   cart: [{type: Schema.Types.ObjectId, ref: 'Product'}]
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = User;
