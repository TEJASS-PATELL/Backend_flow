import React from "react";
import "../style/Premium.css";

const Premium = () => {
  return (
    <div className="premium-container">
      <h1>🎉 Welcome to Premium Access!</h1>
      <p>
        You’ve successfully unlocked all premium features.  
        Explore advanced tools and enjoy full access to MyApp.
      </p>

      <ul>
        <li>🚀 Access to Pro Dashboard</li>
        <li>💡 Priority Support</li>
        <li>📊 Advanced Analytics</li>
      </ul>

      <button
        onClick={() => alert("This is a demo — premium features coming soon!")}
        className="explore-btn"
      >
        Explore Features
      </button>
    </div>
  );
};

export default Premium;
