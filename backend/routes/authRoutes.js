const express=require("express");
const router=express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

const { sendOtp ,verifyOtp, logout }=require("../controllers/authController")

router.get("/", (req, res)=>{
    res.send("hey");
})

router.post("/register", sendOtp("register"));
router.post("/login", sendOtp("login"));
router.post('/register/verify', verifyOtp("register"));
router.post('/login/verify', verifyOtp("login"));
router.post('/logout', verifyToken ,logout )

module .exports=router