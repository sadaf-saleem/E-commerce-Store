const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/userController");

// Routes
router.post("/signup", signup);   // User signup
router.post("/login", login);     // User login

module.exports = router;
