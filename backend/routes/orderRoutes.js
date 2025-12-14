const express = require("express");
const router = express.Router();
const { getOrders, createOrder } = require("../controllers/orderController");

// Get all orders (optional)
router.get("/", getOrders);

// Place new order
router.post("/", createOrder);

module.exports = router;
