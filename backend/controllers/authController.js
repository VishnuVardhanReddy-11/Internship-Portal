const User = require('../models/userModel');
const  client  = require("../config/twilio");
const  hash    = require('../utils/hashPassword');
const { generateToken } = require('../utils/generateToken');
const { comparePassword } = require('../utils/comparePassword');
const { sendEmail } = require('../services/emailService');
const Notification=require('../models/notificationModel');
const axios = require('axios');

const twilioServiceSid=process.env.TWILIO_SERVICE_SID;

const sendOtp = (mode) => {
  return async (req, res) => {
    console.log("OTP route hit");

    const { phone, email, password } = req.body;
    console.log("phone", phone);
    console.log("email", email);
    console.log("password", password);
    

    try {
      const existingUser = await User.findOne({ email });

      if (mode === "register" && existingUser) {
        return res.status(400).json({ message: "User already exists. Please log in." });
      }

      const isResend = req.query.resend === 'true';

      if (mode === "login"  && !isResend) {
        if (!existingUser)
        return res.status(400).json({ message: "User not found. Please register." });
        console.log("yaha");
        console.log("password:- ", password);
        console.log("existingUser.password:- ", existingUser.password);
        
        const isPasswordValid = await comparePassword(password, existingUser.password);
        console.log("phir yaha");
        if (!isPasswordValid) {
          return res.status(400).json({ message: "Invalid password." });
        }
      }
      
      // ✅ Send OTP using 2Factor API
      const otpApiUrl = `https://2factor.in/API/V1/${process.env.OTP_API}/SMS/${phone}/AUTOGEN`;

      const otpResponse = await axios.get(otpApiUrl);
      // console.log("otpResponse", otpResponse);
      
      const sessionId = otpResponse.data.Details;

      // ✅ Log notification
      await Notification.create({
        userId: existingUser?._id || null,
        type: "otp",
        content: `OTP sent to ${phone} for ${mode === "register" ? "registration" : "login"}.`,
      });

       let userInfo = null;

      if (mode === "login" && existingUser) {
          const { password, _id, ...safeUserInfo } = existingUser.toObject();
          userInfo = safeUserInfo;
      }



      return res.status(200).json({
        message: "OTP sent successfully",
        sessionId,
        user: userInfo,
      });
    } catch (error) {
      console.error("OTP sending error:", error.response?.data || error.message);
      return res.status(500).json({ message: "Failed to send OTP" });
    }
  };
};





const verifyOtp = (mode) => {
  return async (req, res) => {
    const { username, otp, phone, email, password, sessionId } = req.body;
    console.log("req.body", req.body);
    console.log("mode:-", mode);
    console.log("email", email);

    try {
      // 🔍 Verify OTP using 2Factor
      const verifyUrl = `https://2factor.in/API/V1/${process.env.OTP_API}/SMS/VERIFY/${sessionId}/${otp}`;

      const response = await axios.get(verifyUrl);

      if (response.data.Details !== "OTP Matched") {
        return res.status(400).json({ message: "Invalid OTP" });
      }

      const existingUser = await User.findOne({ email });
      console.log("existingUser:- ", existingUser);
      

      // 🔹 Register flow
      if (mode === "register") {
        if (existingUser) {
          return res.status(400).json({ message: "User already exists." });
        }

        const hashedPassword = await hash(password);
        const newUser = new User({ name: username, email, phone, password: hashedPassword });
        await newUser.save();

        await Notification.create({
          userId: newUser._id,
          type: "welcome",
          content: `Welcome to the platform, ${username}!`,
        });

        await sendEmail(
          email,
          "Welcome to Our Platform!",
          `Hi ${username}, welcome aboard!`,
          `<strong>Hi ${username},</strong><br/><br/>Welcome to our platform! We're excited to have you on board.`
        );

        return res.status(201).json({ message: "User registered successfully!", user: newUser });
      }

      // 🔹 Login flow
      if (mode === "login") {
        if (!existingUser) {
          return res.status(400).json({ message: "User not found." });
        }
        console.log("fist maa chud gyi 1");
        console.log("password:- ", password);
        console.log("existingUser.password:- ", existingUser.password);
        
        // const isPasswordValid = await comparePassword(password, existingUser.password);
        // console.log("fist maa chud gyi 2");
        // if (!isPasswordValid) {
        //   return res.status(400).json({ message: "Invalid password." });
        // }

        const token = generateToken(existingUser);
        console.log("token:- ", token);
        
        res.cookie("token", token);
        

        return res.status(200).json({ message: "Login successful via OTP!",
            user: existingUser, token });
      }

      return res.status(400).json({ message: "Invalid mode." });
    } catch (error) {
      console.error("OTP verification error:", error.response?.data || error.message);
      return res.status(500).json({ message: "Failed to verify OTP" });
    }
  };
};

const logout=(req,res)=>{
  try{
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout successful" });
  }
  catch(error){
    return res.status(500).json({ message: "Failed to logout" });
  } 

}



// done with verifyinf otp and registering

module.exports = {
  sendOtp,
  verifyOtp,
  logout
};