import React from "react";
import { Link } from "react-router-dom";
import "../style/ForgotPassword.css";

export default function ForgotPassword() {
    return (
        <div className="auth-container">
            <form className="forgot-form">

                <div className="forgot-container">
                    <h1>Forgot Password</h1>
                    <p className="forgot-desc">
                        Enter your email below and we'll send you a link to reset your password.
                    </p>
                    <div className="forgot-div">
                        <label htmlFor="email">
                            Email
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </label>
                        <button type="submit" className="forgot-btn">
                            Send Reset Link
                        </button>
                    </div>
                    <p className="forgot-text">
                        Remember your password? <Link to="/login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
