const express = require('express');
const router = express.Router();


const { verifyAdminToken } = require('../middlewares/verifyAdminToken');
const {loginAdmin} = require('../controllers/adminController');
const { verifyAdminRole } = require('../middlewares/verifyAdminRole');

router.post('/login', loginAdmin);
// router.get('/get-all-courses', verifyToken, verifyAdmin, adminController.getAllCourses);
// router.post('/create-course', verifyAdminToken, verifyAdminRole, createCourse);
// router.get('/get-course/:id', verifyToken, verifyAdmin, adminController.getCourseById);
// router.put('/update-course/:id', verifyToken, verifyAdmin, adminController.updateCourse);
// router.post('/delete-course/:id', verifyAdminToken, verifyAdminRole, deleteCourse);

module .exports=router