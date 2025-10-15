import React, { useState } from "react";

export default function Profile() {

  const handleLogout = () => alert("Logged out!");
  const handleDelete = () => {
    if (window.confirm("Are you sure to delete account?")) alert("Deleted!");
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <div className="profile-info">
        <div className="profile-avatar">
          <img src="./user.png" alt="User Avatar" />
        </div>
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-email">johndoe@example.com</p>
        </div>

        <div className="profile-buttons">
          <button className="profile-btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
          <button className="profile-btn delete-btn" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>

      <div className="profile-right">
        
      </div>
    </div>
  );
}
