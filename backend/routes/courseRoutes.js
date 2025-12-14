const express = require("express");
const router = express.Router();
const { getCourses, addCourse } = require("../controllers/courseController");

router.get("/", getCourses);   // GET /api/courses
router.post("/", addCourse);   // POST /api/courses (optional, admin use)

module.exports = router;
