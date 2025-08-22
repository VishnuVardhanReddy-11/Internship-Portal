import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`http://localhost:3000/admin/course/${courseId}`,
          {
            method: "GET",
            credentials: "include", // important for sending cookies
          }
        );
        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (!course) return <p className="text-center mt-6">Loading course details...</p>;


  // Delete function
const handleDeleteCourse = async (courseId) => {
  console.log("Deleting course with ID:", courseId);
  
  if (!window.confirm("Are you sure you want to delete this course?")) return;

  try {
    const res = await fetch(`http://localhost:3000/admin/delete/${courseId}`, {
      method: "POST",  // since you’re using POST
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await res.json();
    console.log("backend se aaya: ", data);
    
    if (res.ok) {
      alert(data.message);
      navigate("/admin/allCourses");
      // Example: remove from state if you’re listing courses
      // setCourses(courses.filter(c => c._id !== courseId));
    } else {
      alert("Error: " + data.message);
    }
  } catch (err) {
    console.error("Error deleting course:", err);
    alert("Server error while deleting course");
  }
};




  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-2"><strong>Description:</strong> {course.description}</p>
      <p className="text-gray-700 mb-2"><strong>Instructor:</strong> {course.instructor}</p>
      <p className="text-gray-700 mb-2"><strong>Duration:</strong> {course.duration}</p>
      <p className="text-gray-700 mb-2"><strong>Level:</strong> {course.level}</p>
      <p className="text-gray-700 mb-2"><strong>Start Date:</strong> {new Date(course.startDate).toLocaleDateString()}</p>
      <p className="text-gray-700 mb-6"><strong>End Date:</strong> {new Date(course.endDate).toLocaleDateString()}</p>

      <h2 className="text-xl font-semibold mb-3">Course Content</h2>
      <ul className="space-y-4">
        {course.content.map((item, idx) => (
          <li key={idx} className="border p-3 rounded">
            {item.type === "text" && <p>{item.value}</p>}
            {item.type === "video-link" && (
              <a
                href={item.value}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Watch Video
              </a>
            )}
            {item.type === "video-upload" && (
              <video controls className="w-full rounded">
                <source src={`http://localhost:3000/${item.value}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </li>
        ))}
      </ul>

      {/* Admin actions instead of Enroll */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate(`/admin/editCourse/${course._id}`)}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit Course
        </button>
       <button
          onClick={() => handleDeleteCourse(course._id)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
            Delete Course
        </button>

      </div>
    </div>
  );
};

export default CourseDetail;
