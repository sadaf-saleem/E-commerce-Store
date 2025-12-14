const mongoose = require("mongoose"); // <-- ye missing tha

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("Course", courseSchema);
