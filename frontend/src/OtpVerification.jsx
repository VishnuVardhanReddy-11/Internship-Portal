import React, { useRef, useState } from 'react';
import { data, useNavigate } from 'react-router-dom';
import './OtpVerification.css';

const OtpVerification = () => {
  const navigate = useNavigate();
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

 const handleVerify = async (e) => {
  e.preventDefault();
  const otp = otpRefs.map((ref) => ref.current.value).join('');

  if (otp.length !== 6) {
    alert('Please enter the complete 6-digit OTP');
    return;
  }
 

  // Read userData and mode from localStorage
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  const mode = localStorage.getItem("mode");
  const sessionId = localStorage.getItem("sessionId");

  console.log("storedUserData:", storedUserData);
  console.log("mode:", mode);
  console.log("sessionId:", sessionId);

  if (!storedUserData || !mode) {
    alert("Something went wrong. Please try again.");
    return;
  }

  // Prepare request payload
  const payload = {
    ...storedUserData,
    otp,
    sessionId
  };

  console.log("Payload:", payload);
  

  try {
    const response = await fetch(`http://localhost:3000/user/${mode}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log("backend res:", result);
    

    if (!response.ok) {
      throw new Error(result.message || "OTP verification failed");
    }

    alert("OTP Verified Successfully!");
    if(mode === "register"){
      navigate('/');
    }
    navigate('/dashboard');

  } catch (err) {
    alert(err.message);
  }
};


 const handleResend = async () => {
  // Clear OTP boxes
  otpRefs.forEach((ref) => (ref.current.value = ''));
  otpRefs[0].current.focus();

  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  const mode = localStorage.getItem("mode");

  console.log("storedUserData:", storedUserData);
  console.log("mode:", mode);
  

  if (!storedUserData || !mode) {
    alert("User data missing. Please register/login again.");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/user/${mode}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storedUserData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to resend OTP");
    }

    alert("A new OTP has been sent to your phone number.");
  } catch (err) {
    alert(err.message);
  }
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
