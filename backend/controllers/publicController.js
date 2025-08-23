const Course = require('../models/courseModel');

const getCourses= async(req, res)=>{
    try {
    const courses = await Course.find().sort({ createdAt: -1 }).limit(3);
    res.json(courses);
    } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
}

module.exports={
    getCourses
}