const User = require('../models/user');
const Product = require('../models/product');
const debug = require('debug')('mongoose-store:controllers');

module.exports = {
    show
};

async function show(req, res) {
    const user = await User.findOne({}).populate('cart');
    res.render('user/show', {
        user
    });
    debug(user);
}
