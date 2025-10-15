import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
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
      </div>
    </div>
    <Services />
    <Features/>
    <FAQ/>
    </>
  );
}
