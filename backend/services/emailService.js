const transporter = require("../config/emailConfig");
const dotenv = require("dotenv");
dotenv.config();

// Function to send email
const sendEmail = async (to, subject, text, htmlContent) => {
  const mailOptions = {
    from: process.env.USER_EMAIL,
    to,
    subject,
    text,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully to", to);
    return info;
  } catch (err) {
    console.error("❌ Error occurred while sending email:", err.message);
    throw err; // optional: throw to handle it in controller
  }
};

module.exports.sendEmail = sendEmail;
