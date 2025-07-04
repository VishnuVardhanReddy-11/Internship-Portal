import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthData, setError, setLoading } from '../store/authSlice';
import '../styles/OtpVerification.css';

const OtpVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.auth);

  const otpRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleOtpInput = (e, index) => {
    const { value } = e.target;
    if (!/^[0-9]?$/.test(value)) return;
    if (value && index < otpRefs.length - 1) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    dispatch(setLoading());

    const otp = otpRefs.map((ref) => ref.current.value).join('');
    if (otp.length !== 6) {
      dispatch(setError('Please enter the complete 6-digit OTP'));
      return;
    }

    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    const mode = localStorage.getItem("mode");
    const sessionId = localStorage.getItem("sessionId");

    if (!storedUserData || !mode || !sessionId) {
      dispatch(setError("Something went wrong. Please try again."));
      return;
    }

    const payload = {
      ...storedUserData,
      otp,
      sessionId,
    };

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

      if (!response.ok) {
        throw new Error(result.message || "OTP verification failed");
      }

      localStorage.setItem("userData", JSON.stringify({ ...result.user }));

      dispatch(setAuthData({
        user: result.user,
        message: result.message || "OTP Verified Successfully!",
      }));

      if (mode === "register") {
       setTimeout(() => {
         navigate("/");
       }, 2000);
      } else {
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const handleResend = async () => {
    otpRefs.forEach((ref) => (ref.current.value = ''));
    otpRefs[0].current.focus();

    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    const mode = localStorage.getItem("mode");

    if (!storedUserData || !mode) {
      dispatch(setError("User data missing. Please register/login again."));
      return;
    }

    dispatch(setLoading());

    try {
      const response = await fetch(`http://localhost:3000/user/${mode}?resend=true`, {
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

      if (result.sessionId) {
        localStorage.setItem("sessionId", result.sessionId);
      }

      dispatch(setAuthData({
        user: storedUserData,
        message: "A new OTP has been sent to your phone number."
      }));

    } catch (err) {
      dispatch(setError(err.message));
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
        <button className="exitBtn" type="button" onClick={handleExit}>×</button>

        <div className="otp-section">
          <span className="mainHeading">Enter OTP</span>
          <p className="otpSubheading">
            We have sent a 6-digit verification code to your mobile number
          </p>

          {message && <p className="success-msg" style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
          {error && <p className="error-msg" style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

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

          <button className="verifyButton" type="submit" disabled={loading}>
            {loading ? 'Verifying...' : 'Verify'}
          </button>

          <p className="resendNote">
            Didn’t receive the code?{' '}
            <button
              className="resendBtn"
              type="button"
              onClick={handleResend}
              disabled={loading}
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
