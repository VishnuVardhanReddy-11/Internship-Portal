const express = require('express');
const router = express.Router();

const upload = require('../middlewares/uploadMiddleware');
const { verifyAdminToken } = require('../middlewares/verifyAdminToken');
const {loginAdmin, createCourse, getAllCourses } = require('../controllers/adminController');
const { verifyAdmin } = require('../middlewares/verifyAdminRole');

router.post('/login', loginAdmin);
router.get('/get-all-courses', verifyAdminToken, getAllCourses);
router.post('/create-course', verifyAdminToken, upload.any(), createCourse);
// router.get('/get-course/:id', verifyToken, verifyAdmin, adminController.getCourseById);
// router.put('/update-course/:id', verifyToken, verifyAdmin, adminController.updateCourse);
// router.post('/delete-course/:id', verifyAdminToken, verifyAdminRole, deleteCourse);

module.exports=router