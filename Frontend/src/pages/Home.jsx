import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

export default function Home() {
  const handleBuy = () => {
    console.log("hello")
  }
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>
          Welcome to <span>MyApp</span>
        </h1>
        <p>
          Build, learn, and explore modern web apps with React — fast, clean, and powerful.
        </p>
        <div className="home-buttons">
          <Link to="/login" className="home-btn primary-btn">
            Login
          </Link>
          <Link to="/signup" className="home-btn secondary-btn">
            Sign Up
          </Link>
        </div>

        <div className="pricing-section">
          <div className="pricing-cards">
            <div className="pricing-card free-card">
              <h3>Free Plan</h3>
              <p>Get access to basic features and start exploring.</p>
              <ul>
                <li>✔ Basic Dashboard</li>
                <li>✔ Email Login</li>
                <li>❌ No Premium Features</li>
              </ul>
              <Link to="/signup" className="plan-btn">
                Get Started
              </Link>
            </div>

            <div className="pricing-card paid-card">
              <h3>Pro Plan</h3>
              <p>Unlock all premium tools and exclusive access.</p>
              <ul>
                <li>✔ All Free Features</li>
                <li>✔ Priority Support</li>
                <li>✔ Premium Dashboard</li>
              </ul>
              <button className="plan-btn paid" onClick={handleBuy}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
