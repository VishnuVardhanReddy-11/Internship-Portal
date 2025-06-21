import React, { useRef } from 'react';
import './OtpVerification.css';

const OtpVerification = () => {
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtpInput = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;
    if (value && index < otpRefs.length - 1) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const otp = otpRefs.map(ref => ref.current.value).join('');
    if (otp.length !== 4) {
      alert('Please enter complete OTP');
      return;
    }
    alert('OTP Verified Successfully!');
  };

  const handleResend = () => {
    otpRefs.forEach(ref => ref.current.value = '');
    otpRefs[0].current.focus();
    alert('OTP has been resent to your phone number');
  };

  const handleExit = () => {
    if (window.confirm('Are you sure you want to close?')) {
      window.close();
    }
  };

  return (
    <div className="otp-page">
      <form className="otp-Form" onSubmit={handleVerify}>
        <button className="exitBtn" type="button" onClick={handleExit}>×</button>

        <div className="otp-section">
          <span className="mainHeading">Enter OTP</span>
          <p className="otpSubheading">We have sent a verification code to your mobile number</p>

          <div className="inputContainer">
            {otpRefs.map((ref, index) => (
              <input
                key={index}
                required
                maxLength="1"
                type="text"
                className="otp-input"
                ref={ref}
                onInput={(e) => handleOtpInput(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
              />
            ))}
          </div>

          <button className="verifyButton" type="submit">Verify</button>
          <p className="resendNote">
            Didn't receive the code? <button className="resendBtn" type="button" onClick={handleResend}>Resend Code</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default OtpVerification;
