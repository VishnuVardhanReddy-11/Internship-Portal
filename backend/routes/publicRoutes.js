const express=require("express");
const router=express.Router();
const { getCourses } = require("../controllers/publicController");

router.get("/courses", getCourses); 

module .exports=router;