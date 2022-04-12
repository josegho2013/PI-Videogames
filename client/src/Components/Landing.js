import React from "react";
import { Link } from "react-router-dom";
import "./Styles/LandingStyle.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing1">
        <div className="images">
          <div className="img1" />
          <div className="img2" />
          <div className="img3" />
          <div className="img4" />
          <div className="img5" />
        </div>
        <p className="title1">Mango Entertainment</p>
        <h3 className="title2">presents</h3>
        <h1 className="title3">The Future Earth!</h1>
        <Link to="/home" className="link_landing">
          <button>Let´s Go!</button>
        </Link>
      </div>
      <div className="landing2"></div>
    </div>
  );
}

export default Landing;
