const User = require('../models/userModel');
const  client  = require("../config/twilio");
const  hash    = require('../utils/hashPassword');
const { generateToken } = require('../utils/generateToken');
const { comparePassword } = require('../utils/comparePassword');
const { sendEmail } = require('../services/emailService');
const Notification=require('../models/notificationModel');
const Course = require('../models/courseModel');

getAllCourses = async (req, res) => {
    try {
        console.log("getAllCourses");
        
        const courses = await Course.find();
        console.log("courses", courses);
        
        res.status(200).json(courses);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllCourses };