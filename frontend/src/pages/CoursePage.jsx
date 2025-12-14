import React, { useEffect, useState } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      {courses.length === 0 ? (
        <p className="text-gray-600">No courses available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course._id} className="border rounded p-4 shadow hover:shadow-lg transition">
              <img
                src={`/images/${course.image}`}
                alt={course.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-bold">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <p className="font-bold mt-2">${course.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
