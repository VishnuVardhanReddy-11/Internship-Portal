const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
dotenv.config();

// Validate environment variables
const { SENDGRID_API_KEY, FROM_EMAIL } = process.env;
if (!SENDGRID_API_KEY || !FROM_EMAIL) {
  throw new Error('Missing SENDGRID_API_KEY or FROM_EMAIL in environment variables');
}

sgMail.setApiKey(SENDGRID_API_KEY);

// Basic email validation
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sendWelcomeEmail = async (toEmail, userName) => {
  // Input validation
  if (!toEmail || !isValidEmail(toEmail)) {
    throw new Error('Invalid or missing recipient email');
  }
  if (!userName || typeof userName !== 'string' || userName.trim() === '') {
    throw new Error('Invalid or missing userName');
  }

  console.log('Sender:', FROM_EMAIL);
  console.log('Recipient:', toEmail);

  const msg = {
    to: toEmail,
    from: FROM_EMAIL, // Verified sender email
    subject: 'Welcome to Our Platform!',
    text: `Hi ${userName}, welcome aboard!`,
    html: `<strong>Hi ${userName},</strong><br/><br/>Welcome to our platform! We're excited to have you on board.`,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
    return true; // Indicate success
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

module.exports = { sendWelcomeEmail };