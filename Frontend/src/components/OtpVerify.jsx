import React, { use, useState } from "react";
import "../style/ForgotPassword.css";
import { useNavigate } from "react-router-dom"; 

export default function OtpVerify() {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (otp.length === 6) {
            alert("OTP Verified! You can reset your password now.");
            navigate("/forgot-password/reset");
        }
        else {
            alert("Enter a valid 6-digit OTP");
        }
    }

  return (
    <>
      <h1>Enter OTP</h1>
      <p className="forgot-desc">
        We've sent a 6-digit code to your email Please enter the code below.
      </p>
      <div className="forgot-div">
        <input
          id="otp"
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))}
          placeholder="Enter 6-digit code"
          required
        />
        <button
          type="submit"
          className="forgot-btn"
          onClick={handleOtpSubmit}
        >
          Verify Email
        </button>
      </div>
    </>
  );
}
