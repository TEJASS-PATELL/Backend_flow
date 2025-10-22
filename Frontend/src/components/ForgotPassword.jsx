import React from "react";
import { Outlet } from "react-router-dom";
import "../style/ForgotPassword.css";

export default function ForgotPassword() {
  return (
    <div className="auth-container">
      <div className="forgot-form">
        <Outlet /> 
      </div>
    </div>
  );
}
