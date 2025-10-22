import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../style/ForgotPassword.css";

export default function EnterEmail() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/forgot-password/verify-otp");
  };

  return (
    <>
      <h1>Forgot Password</h1>
      <p className="forgot-desc">
        Enter your email below and we'll send you a 6-digit code to reset your password.
      </p>
      <div className="forgot-div">
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button onClick={handleSubmit} type="submit" className="forgot-btn">
          Send Reset Code
        </button>
      </div>
      </>
  );
}
