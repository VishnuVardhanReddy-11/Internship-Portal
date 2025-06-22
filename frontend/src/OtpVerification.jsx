import React, { useRef } from 'react';
import './OtpVerification.css';

const OtpVerification = () => {
  // create 6 refs instead of 4
  const otpRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleOtpInput = (e, index) => {
    const { value } = e.target;
    // allow only a single digit
    if (!/^\d?$/.test(value)) return;

    // move focus to the next box if a digit is typed
    if (value && index < otpRefs.length - 1) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (e, index) => {
    // on backspace, move focus to previous box if current is empty
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const otp = otpRefs.map((ref) => ref.current.value).join('');

    if (otp.length !== 6) {
      alert('Please enter the complete 6-digit OTP');
      return;
    }

    alert('OTP Verified Successfully!');
    // TODO: send OTP to backend here
  };

  const handleResend = () => {
    otpRefs.forEach((ref) => (ref.current.value = ''));
    otpRefs[0].current.focus();
    alert('A new OTP has been sent to your phone number');
  };

  const handleExit = () => {
    if (window.confirm('Are you sure you want to close?')) {
      window.close();
    }
  };

  return (
    <div className="otp-page">
      <form className="otp-Form" onSubmit={handleVerify}>
        <button className="exitBtn" type="button" onClick={handleExit}>
          ×
        </button>

        <div className="otp-section">
          <span className="mainHeading">Enter OTP</span>
          <p className="otpSubheading">
            We have sent a 6-digit verification code to your mobile number
          </p>

          {/* six input boxes */}
          <div className="inputContainer">
            {otpRefs.map((ref, index) => (
              <input
                key={index}
                ref={ref}
                type="text"
                inputMode="numeric"
                pattern="\d{1}"
                maxLength="1"
                className="otp-input"
                required
                onInput={(e) => handleOtpInput(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
              />
            ))}
          </div>

          <button className="verifyButton" type="submit">
            Verify
          </button>

          <p className="resendNote">
            Didn’t receive the code?{' '}
            <button
              className="resendBtn"
              type="button"
              onClick={handleResend}
            >
              Resend Code
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default OtpVerification;
