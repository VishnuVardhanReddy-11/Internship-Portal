const User = require('../models/userModel');
const  client  = require("../config/twilio");
const  hash    = require('../utils/hashPassword');
const { generateToken } = require('../utils/generateToken');
const { comparePassword } = require('../utils/comparePassword');
const { sendEmail } = require('../services/emailService');
const Notification=require('../models/notificationModel');
const axios = require('axios');


// const generateToken = require('../utils/generateToken');
// const sendEmail = require('../utils/sendEmail');

// exports.registerUser = async (req, res) => {
//   const { name, email, phone, password } = req.body;
//   // Check if user exists, hash password, generate OTP
//   // Save user to DB
//   // Send OTP via email or SMS
// };

// exports.verifyOTP = async (req, res) => {
//   const { email, otp } = req.body;
//   // Compare OTP, set verified=true, send welcome email
// };

// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   // Authenticate user
//   // Return JWT token
// };


const twilioServiceSid=process.env.TWILIO_SERVICE_SID;
 

// user register and login using otp
// const sendOtp =(mode)=>{
//   return async (req, res) => {
//     console.log("yaha aayi");
    
//   const { phone, email } = req.body;
//   console.log("phone", phone);
//   console.log("email", email);
  
//   // return res.status(200).json({ message: "OTP sent successfully" });

//   try {
//     const existingUser = await User.findOne({ email });

//     if (mode === "register" && existingUser) {
//       return res.status(400).json({ message: "User already exists. Please log in." });
//     }

//     if (mode === "login" && !existingUser) {
//       return res.status(400).json({ message: "User not found. Please register." });
//     }

//     const otpResponse = await client.verify.v2.services(twilioServiceSid).verifications.create({
//       to: `+91${phone}`,
//       channel: "sms",
//     });

//     await Notification.create({
//         userId: existingUser?._id || null, // null in case of new user
//         type: "otp",
//         content: `OTP sent to ${phone} for ${mode === 'register' ? 'registration' : 'login'}.`,
//       });

//     return res.status(200).json({ message: "OTP sent successfully", otpResponse });
//   } catch (error) {
//     console.error("OTP sending error:", error);
//     return res.status(500).json({ message: "Failed to send OTP" });
//   }
// }
// } 
// 
// sending otp via call
const sendOtp = (mode) => {
  return async (req, res) => {
    console.log("OTP route hit");

    const { phone, email } = req.body;
    // console.log("phone", phone);
    // console.log("email", email);

    try {
      const existingUser = await User.findOne({ email });

      if (mode === "register" && existingUser) {
        return res.status(400).json({ message: "User already exists. Please log in." });
      }

      if (mode === "login" && !existingUser) {
        return res.status(400).json({ message: "User not found. Please register." });
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

      return res.status(200).json({
        message: "OTP sent successfully",
        sessionId: sessionId,
      });
    } catch (error) {
      console.error("OTP sending error:", error.response?.data || error.message);
      return res.status(500).json({ message: "Failed to send OTP" });
    }
  };
};



// Verify OTP and Register
// const verifyOtp =(mode)=>{
//  return  async (req, res) => {
//   const { name, otp, phone, email, password } = req.body;


//   try {
//     const verificationCheck = await client.verify.v2.services(twilioServiceSid).verificationChecks.create({
//       to: `+91${phone}`,
//       code: otp,
//     });

//     if (verificationCheck.status !== "approved") {
//       return res.status(400).json({ message: "Invalid OTP" });
//     }

//     const existingUser = await User.findOne({ email });

//     // 🔹 Register flow
//     if (mode === "register") {
//       if (existingUser) {
//         return res.status(400).json({ message: "User already exists." });
//       }

//       const hashedPassword = await hash(password);
//       const newUser = new User({ name, email, phone, password: hashedPassword });
//       console.log(newUser);
//       await newUser.save();

//       await Notification.create({
//           userId: newUser._id,
//           type: "welcome",
//           content: `Welcome to the platform, ${name}!`
//         });

//       await sendEmail(
//        email,
//        "Welcome to Our Platform!",
//        `Hi ${name}, welcome aboard!`,
//       `<strong>Hi ${name},</strong><br/><br/>Welcome to our platform! We're excited to have you on board.`
//       )

//       // You can generate and return a JWT token here if needed
//       let token=generateToken(newUser);
//       console.log(token);

//       res.cookie("token", token);
      
//       return res.status(201).json({ message: "User registered successfully!", user: newUser });
//     }

//     // 🔹 Login flow
//     if (mode === "login") {
//       if (!existingUser) {
//         return res.status(400).json({ message: "User not found." });
//       }

//       const isPasswordValid = await comparePassword(password, existingUser.password);
//       if (!isPasswordValid) {
//         return res.status(400).json({ message: "Invalid password." });
//       }

//       // You can generate and return a JWT token here if needed
//       let token=generateToken(existingUser);
//       console.log(token);
//       res.cookie("token", token);
     
      
//       return res.status(200).json({ message: "Login successful via OTP!", user: existingUser });
//     }

//     return res.status(400).json({ message: "Invalid mode." });

//   } catch (error) {
//     console.error("OTP verification error:", error);
//     return res.status(500).json({ message: "Failed to verify OTP" });
//   }
// }
// } 


const verifyOtp = (mode) => {
  return async (req, res) => {
    const { name, otp, phone, email, password, sessionId } = req.body;

    try {
      // 🔍 Verify OTP using 2Factor
      const verifyUrl = `https://2factor.in/API/V1/${process.env.OTP_API}/SMS/VERIFY/${sessionId}/${otp}`;

      const response = await axios.get(verifyUrl);

      if (response.data.Details !== "OTP Matched") {
        return res.status(400).json({ message: "Invalid OTP" });
      }

      const existingUser = await User.findOne({ email });

      // 🔹 Register flow
      if (mode === "register") {
        if (existingUser) {
          return res.status(400).json({ message: "User already exists." });
        }

        const hashedPassword = await hash(password);
        const newUser = new User({ name, email, phone, password: hashedPassword });
        await newUser.save();

        await Notification.create({
          userId: newUser._id,
          type: "welcome",
          content: `Welcome to the platform, ${name}!`,
        });

        await sendEmail(
          email,
          "Welcome to Our Platform!",
          `Hi ${name}, welcome aboard!`,
          `<strong>Hi ${name},</strong><br/><br/>Welcome to our platform! We're excited to have you on board.`
        );

        const token = generateToken(newUser);
        res.cookie("token", token);

        return res.status(201).json({ message: "User registered successfully!", user: newUser });
      }

      // 🔹 Login flow
      if (mode === "login") {
        if (!existingUser) {
          return res.status(400).json({ message: "User not found." });
        }

        const isPasswordValid = await comparePassword(password, existingUser.password);
        if (!isPasswordValid) {
          return res.status(400).json({ message: "Invalid password." });
        }

        const token = generateToken(existingUser);
        res.cookie("token", token);

        return res.status(200).json({ message: "Login successful via OTP!", user: existingUser });
      }

      return res.status(400).json({ message: "Invalid mode." });
    } catch (error) {
      console.error("OTP verification error:", error.response?.data || error.message);
      return res.status(500).json({ message: "Failed to verify OTP" });
    }
  };
};



// done with verifyinf otp and registering

module.exports = {
  sendOtp,
  verifyOtp,
};