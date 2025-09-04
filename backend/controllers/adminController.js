const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');
const Course = require('../models/courseModel');
const path = require('path');
const fs = require('fs');

loginAdmin = async (req, res) => {
  const { username, email, password } = req.body;
  console.log("req.body", req.body);
  
  try {
    const existingAdmin = await Admin.findOne({ email });
    if (!existingAdmin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const isMatch = await bcrypt.compare(password, existingAdmin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const adminToken = generateToken(existingAdmin);
    res.cookie('adminToken', adminToken);


    res.status(200).json({
      message: 'Login successful',
      adminToken,
      admin: {
        name: existingAdmin.name,
        email: existingAdmin.email,
        role: existingAdmin.role,
      },
    });
  } catch (error) {
    console.error('Admin login error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};



// Create course
const createCourse = async (req, res) => {
  console.log("frontend:", req.body);
  
  try {
    const {
      title,
      description,
      instructor,
      duration,
      startDate,
      endDate,
      level,
      content
    } = req.body;

    const parsedContent = JSON.parse(content);
    const finalContent = [];

    for (let i = 0; i < parsedContent.length; i++) {
      const block = parsedContent[i];
      if (block.type === 'video-upload') {
        const file = req.files.find(file => file.fieldname === block.value);
        if (file) {
          finalContent.push({
            type: 'video-upload',
            value: `uploads/${file.filename}`
          });
        }
      } else {
        finalContent.push(block);
      }
    }

    const newCourse = new Course({
      title,
      description,
      instructor,
      duration,
      startDate,
      endDate,
      level,
      content: finalContent
    });

    await newCourse.save();

    res.status(201).json({ message: 'Course created successfully!', course: newCourse });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ message: 'Server error while creating course' });
  }
};

// Get all courses
 getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single course
 getCourseById = async (req, res) => {
  try {
    console.log("getCourseById");
    
    const course = await Course.findById(req.params.id);
    console.log("course", course);
    
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update course
// File: controllers/courseController.js

updateCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      instructor,
      duration,
      startDate,
      endDate,
      level,
      content
    } = req.body;

    // Parse the content (stringified JSON from frontend)
    const parsedContent = JSON.parse(content);
    const finalContent = [];

    for (let i = 0; i < parsedContent.length; i++) {
      const block = parsedContent[i];

      if (block.type === 'video-upload') {
        // Check if a new file is uploaded for this block
        const file = req.files?.find(file => file.fieldname === block.value);

        if (file) {
          // New file uploaded → update path
          finalContent.push({
            type: 'video-upload',
            value: `uploads/${file.filename}`
          });
        } else {
          // No new file → keep old value
          finalContent.push(block);
        }
      } else {
        // For text or other content blocks
        finalContent.push(block);
      }
    }

    // Update the course
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        instructor,
        duration,
        startDate,
        endDate,
        level,
        content: finalContent
      },
      { new: true } // return updated document
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({
      message: "Course updated successfully!",
      course: updatedCourse
    });
  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).json({ message: "Server error while updating course" });
  }
};

module.exports = { updateCourse };

// Delete course
 deleteCourse = async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  loginAdmin,
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};  