const client = require('../config/twilio');

const sendOTP = async (phone) => {
  return await client.verify
    .services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verifications.create({ to: phone, channel: 'sms' });
};

const verifyOTP = async (phone, otp) => {
  return await client.verify
    .services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verificationChecks.create({ to: phone, code: otp });
};

module.exports = { sendOTP, verifyOTP };
