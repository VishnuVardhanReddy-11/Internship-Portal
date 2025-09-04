const express = require('express');
const router = express.Router();

const upload = require('../middlewares/uploadMiddleware');
const { verifyAdminToken } = require('../middlewares/verifyAdminToken');
const {loginAdmin, createCourse, getAllCourses } = require('../controllers/adminController');
const { verifyAdmin } = require('../middlewares/verifyAdminRole');

router.post('/login', loginAdmin);
router.get('/get-all-courses', verifyAdminToken, getAllCourses);
router.post('/create-course', verifyAdminToken, upload.any(), createCourse);
router.get('/course/:id', verifyAdminToken, getCourseById);
router.put('/edit/:id', verifyAdminToken, upload.any(), updateCourse);
router.post('/delete/:id', verifyAdminToken, deleteCourse);

module.exports=router