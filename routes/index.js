const express = require("express");

//Middlewares
const tokenAuthenticate = require("../middlewares/tokenAuthenticate");

//Controllers
const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/products", productsController.index);
router.get("/products/:id", productsController.show);
router.post("/add/product", tokenAuthenticate.verifyToken, productsController.create);
router.put("/edit/product", tokenAuthenticate.verifyToken, productsController.update);
router.delete("/delete/product", tokenAuthenticate.verifyToken, productsController.destroy);

module.exports = router;