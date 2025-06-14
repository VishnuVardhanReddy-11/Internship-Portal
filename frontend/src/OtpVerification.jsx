import React, { useRef, useState } from 'react';
import './OtpVerification.css';

const OtpVerification = () => {
  const [step, setStep] = useState(1);
  const phoneRef = useRef(null);
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleSendOtp = () => {
    const phone = phoneRef.current.value.trim();
    if (phone.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }
    setStep(2);
    otpRefs[0].current.focus();
  };

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

        {step === 1 && (
          <div className="phone-section">
            <span className="step-indicator">Step 1 of 2</span>
            <span className="mainHeading">Enter Phone Number</span>
            <p className="otpSubheading">We'll send a verification code to your mobile number</p>

            <div className="phone-container">
              <label className="phone-label">Select Country & Enter Phone</label>
              <div className="phone-input-wrapper">
                <div className="country-select-wrapper">
                  <select className="country-select" id="country-code">
                    <option value="91">🇮🇳 +91</option>
                    <option value="1">🇺🇸 +1</option>
                    <option value="44">🇬🇧 +44</option>
                    <option value="1">🇨🇦 +1</option>
                    <option value="61">🇦🇺 +61</option>
                    <option value="49">🇩🇪 +49</option>
                    <option value="33">🇫🇷 +33</option>
                    <option value="81">🇯🇵 +81</option>
                    <option value="55">🇧🇷 +55</option>
                    <option value="27">🇿🇦 +27</option>
                    <option value="86">🇨🇳 +86</option>
                    <option value="52">🇲🇽 +52</option>
                    <option value="39">🇮🇹 +39</option>
                    <option value="34">🇪🇸 +34</option>
                    <option value="82">🇰🇷 +82</option>
                    <option value="7">🇷🇺 +7</option>
                    <option value="54">🇦🇷 +54</option>
                    <option value="966">🇸🇦 +966</option>
                    <option value="234">🇳🇬 +234</option>
                    <option value="46">🇸🇪 +46</option>
                  </select>
                  <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                  </svg>
                </div>
                <input
                  className="phone-input"
                  placeholder="Phone number"
                  ref={phoneRef}
                  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                />
              </div>
            </div>
            <button className="verifyButton" type="button" onClick={handleSendOtp}>Send OTP</button>
          </div>
        )}

        {step === 2 && (
          <div className="otp-section">
            <span className="step-indicator">Step 2 of 2</span>
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
        )}
      </form>
    </div>
  );
};

export default OtpVerification;
