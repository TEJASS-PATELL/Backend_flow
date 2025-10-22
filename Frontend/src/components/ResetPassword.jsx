import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password reset successful!");
    navigate("/login");
  };

  return (
      <>
        <h1>Reset Password</h1>
        <p className="forgot-desc">Enter your new password below.</p>

        <div className="forgot-div">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="forgot-btn" onClick={handleSubmit}>
            Reset Password
          </button>
        </div>
      </>
  );
}
