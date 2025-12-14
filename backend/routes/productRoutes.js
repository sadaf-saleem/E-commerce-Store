const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById, addProduct } = require("../controllers/productController");

// Routes
router.get("/", getAllProducts);        // GET all products
router.get("/:id", getProductById);    // GET single product by ID
router.post("/", addProduct);          // POST new product

module.exports = router;
