import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/ForgotPassword.css";

export default function ForgotPassword() {
    const [otpStage, setotpStage] = useState(true);
    const [otp, setOtp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setotpStage(false);
    }

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (otp.length === 6) {
            alert("OTP Verified! You can reset your password now.");
        }
        else {
            alert("Enter a valid 6-digit OTP");
        }
    }

    return (
        <div className="auth-container">
            <form className="forgot-form">
                {otpStage ? (
                    <>
                        <h1>Forgot Password</h1>
                        <p className="forgot-desc">
                            Enter your email below and we'll send you a link to reset your password.
                        </p>
                        <div className="forgot-div">                           
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                />                       
                            <button onClick={handleSubmit} type="submit" className="forgot-btn">
                                Send Reset Link
                            </button>
                        </div>
                        <p className="forgot-text">
                            Remember your password? <Link to="/login">Login</Link>
                        </p>
                    </>
                ) : (
                    <>
                        <h1>Enter OTP</h1>
                        <p className="forgot-desc">
                            We've sent a 6-digit code to your email.
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
                                onClick={handleOtpSubmit}>
                                Verify OTP
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}
