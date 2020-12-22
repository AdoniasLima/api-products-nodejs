const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
    title: {type: String, trim: true, required: true},
    description: String
});

module.exports = mongoose.model("Product", productSchema, 'products');