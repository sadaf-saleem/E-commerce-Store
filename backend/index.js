require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // <-- add this
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Connection Error:", err));

// Middleware
app.use(express.json());
app.use(cors()); // <-- add this

// Test Route
app.get("/", (req, res) => {
  res.send("E-commerce Backend Server is Running!");
});

// Product Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// User Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Order Routes

app.use("/api/orders", require("./routes/orderRoutes"));


const courseRoutes = require("./routes/courseRoutes");
app.use("/api/courses", courseRoutes);



// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
