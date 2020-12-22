const mongoose = require("mongoose");

const Product = mongoose.model("Product");

exports.index = async function(request, response){
    const products = await Product.find();
    response.status(200);
    response.json({"products": products, "message": "success", "code": 200});
}

exports.show = async function(request, response){
    Product.findOne({_id: request.params.id}, function(error, product){
        response.status(200);
        response.json({"product": product, "message": "success", "code": 200});
    });
}

exports.create = async function(request, response){
    const product = new Product(request.body);
    try {
        await product.save();
    } catch (error) {
        response.status(500);
        response.json({"message": "error", "code": 500});
        return;
    }
    response.status(200);
    response.json({"message": "success", "code": 200});
}

exports.update = async function(request, response){
    let product = {};
    try {
        product = await Product.findOneAndUpdate(
            {_id: request.body._id},
            request.body,
            {
                new: true, // Return new product after update
                runValidators: true // Performs all model validations
            }
        );
    } catch (error) {
        response.status(500);
        response.json({"message": error.message, "code": 500});
        return;
    }
    response.status(200);
    response.json({"product": product, "message": "success", "code": 200});
}

exports.destroy = async function(request, response){
    Product.deleteOne({ _id: request.body._id }, function (error) {
        response.json({"message": "success", "code": 200});
    });
}