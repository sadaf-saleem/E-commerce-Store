const Course = require("../models/Course");

// Get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new course (optional)
const addCourse = async (req, res) => {
  const { title, description, price, category, image } = req.body;
  try {
    const course = new Course({ title, description, price, category, image });
    const saved = await course.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getCourses, addCourse };
