import React from "react";
import { Link } from "react-router-dom";
import "./Styles/LandingStyle.css";


function Landing() {
  return (
    <div className="landing">
      <div className="land_text">
        <h2>Mango Entertainment</h2>
        <h3>presents</h3>
        <h1>The Future Earth!</h1>
        <Link to="/Home">
          <button className="land_button">Let´s Go!</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
