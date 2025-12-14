const Order = require("../models/Order");

// Get all orders (optional)
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new order
const createOrder = async (req, res) => {
  const { items, total, userEmail } = req.body;
  if (!items || items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }
  if (!userEmail) {
    return res.status(400).json({ message: "User email is required" });
  }
  try {
    const order = new Order({ items, total, userEmail });
    const savedOrder = await order.save();
    res.status(201).json({ message: "Order placed successfully!", order: savedOrder });
  } catch (error) {
    res.status(500).json({ message: "Failed to place order" });
  }
};

module.exports = { getOrders, createOrder };
