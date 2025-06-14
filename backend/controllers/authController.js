const User = require('../models/user');
const  client  = require("../config/twilio");
const  hash    = require('../utils/hashPassword');
const { generateToken } = require('../utils/generateToken');
const { comparePassword } = require('../utils/comparePassword');
const { sendWelcomeEmail } = require('../utils/sendEmail');


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
 
const sendOtp =(mode)=>{
  return async (req, res) => {
    console.log("yaha aayi");
    
  const { phone, email } = req.body;
  console.log("phone", phone);
  console.log("email", email);
  
  // return res.status(200).json({ message: "OTP sent successfully" });

  try {
    const existingUser = await User.findOne({ email });

    if (mode === "register" && existingUser) {
      return res.status(400).json({ message: "User already exists. Please log in." });
    }

    if (mode === "login" && !existingUser) {
      return res.status(400).json({ message: "User not found. Please register." });
    }

    const otpResponse = await client.verify.v2.services(twilioServiceSid).verifications.create({
      to: `+91${phone}`,
      channel: "sms",
    });

    return res.status(200).json({ message: "OTP sent successfully", otpResponse });
  } catch (error) {
    console.error("OTP sending error:", error);
    return res.status(500).json({ message: "Failed to send OTP" });
  }
}
} 


// Verify OTP and Register
const verifyOtp =(mode)=>{
 return  async (req, res) => {
  const { name, email, phone, password, otp } = req.body;

  try {
    const verificationCheck = await client.verify.v2.services(twilioServiceSid).verificationChecks.create({
      to: `+91${phone}`,
      code: otp,
    });

    if (verificationCheck.status !== "approved") {
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
      console.log(newUser);
      await newUser.save();

      await sendWelcomeEmail(email, name);

      // You can generate and return a JWT token here if needed
      let token=generateToken(newUser);
      console.log(token);

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

      // You can generate and return a JWT token here if needed
      let token=generateToken(existingUser);
      console.log(token);
      res.cookie("token", token);
     
      
      return res.status(200).json({ message: "Login successful via OTP!", user: existingUser });
    }

    return res.status(400).json({ message: "Invalid mode." });

  } catch (error) {
    console.error("OTP verification error:", error);
    return res.status(500).json({ message: "Failed to verify OTP" });
  }
}
} 




// done with verifyinf otp and registering

module.exports = {
  sendOtp,
  verifyOtp,
};